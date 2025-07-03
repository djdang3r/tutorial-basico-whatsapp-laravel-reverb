<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ScriptDevelop\WhatsappManager\Facades\Whatsapp;
use ScriptDevelop\WhatsappManager\Models\Contact;
use ScriptDevelop\WhatsappManager\Models\WhatsappPhoneNumber;

class WhatsappLiveChatController extends Controller
{
    public function show($phoneNumberId)
    {
        // Obtener el número de teléfono con sus relaciones
        $phoneNumber = WhatsappPhoneNumber::with('businessProfile', 'businessAccount')
            ->findOrFail($phoneNumberId);

        session(['whatsapp_phone_number' => $phoneNumber]);

        $contacts = Contact::with('messages')
            ->whereHas('messages', function ($query) use ($phoneNumber) {
                $query->where('whatsapp_phone_id', $phoneNumber->phone_number_id);
            })
            ->get();

        $contact_list = $contacts->map(function ($contact) use ($phoneNumber) {
            $latestMessage = $contact->latestMessage($phoneNumber->phone_number_id);
            $unreadCount = $contact->unreadMessagesCountByContact();

            return [
                'contact' => $contact,
                'latest_message' => $latestMessage,
                'unread_count' => $unreadCount,
            ];
        });

        return view('livechat', compact('phoneNumber', 'contacts', 'contact_list'));
    }

    public function getContactMessages(Request $request)
    {
        $phoneNumber = session('whatsapp_phone_number');

        if (!$phoneNumber) {
            return response()->json(['error' => 'Número de teléfono no encontrado en la sesión.'], 400);
        }

        $contactId = $request->input('contact_id');
        $contact = Contact::findOrFail($contactId);

        $messages = $contact->messages()
            ->with('mediaFiles')
            ->where('whatsapp_phone_id', $phoneNumber->phone_number_id)
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($message) use ($contact) {
                // Parsear correctamente el contenido JSON
                $jsonContent = null;
                if ($message->json) {
                    $decoded = json_decode($message->json, true);
                    if (is_string($decoded)) {
                        $jsonContent = json_decode($decoded, true);
                    } else {
                        $jsonContent = $decoded;
                    }
                }

                $interactiveResponse = null;
                if ($message->message_method === 'INPUT' && $message->message_type === 'INTERACTIVE' && $message->json_content) {
                    $decodedContent = json_decode($message->json_content, true);
                    if (is_string($decodedContent)) {
                        $interactiveResponse = json_decode($decodedContent, true);
                    } else {
                        $interactiveResponse = $decodedContent;
                    }
                }

                return [
                    'id' => $message->message_id,
                    'content' => $message->message_content,
                    'time' => $message->created_at->format('h:i A'),
                    'is_sent' => $message->message_method === 'OUTPUT',
                    'is_read' => !is_null($message->read_at),
                    'message_type' => $message->message_type,
                    'message_method' => $message->message_method,
                    'message_context_id' => $message->message_context_id,
                    'json_content' => $message->json_content,
                    'profile_picture_url' => $message->message_method === 'OUTPUT'
                        ? $contact->profile_picture_url
                        : asset('assets/images/default-avatar.png'),
                    'media_files' => $message->mediaFiles->map(function ($mediaFile) {
                        return [
                            'url' => $mediaFile->url,
                            'file_name' => $mediaFile->file_name,
                            'mime_type' => $mediaFile->mime_type,
                            'file_size' => $mediaFile->file_size,
                        ];
                    }),
                    'json' => $jsonContent,
                    'interactive_response' => $interactiveResponse, // Respuesta interactiva
                ];
            });

        return response()->json([
            'contact' => [
                'contact_name' => $contact->contact_name,
                'profile_picture_url' => $contact->profile_picture_url ?? asset('assets/images/avtar/14.png'),
                'status' => 'Online',
            ],
            'messages' => $messages
        ]);
    }

    public function sendTextMessage(Request $request)
    {
        $phoneNumberId = $request->input('phone_number_id');
        $contactId = $request->input('contact_id');
        $messageContent = $request->input('message_content');

        if (!$phoneNumberId || !$contactId || !$messageContent) {
            return response()->json(['error' => 'Faltan datos necesarios para enviar el mensaje.'], 400);
        }

        try {
            // Obtener el número de teléfono y el contacto
            $phoneNumber = WhatsappPhoneNumber::findOrFail($phoneNumberId);
            $contact = Contact::findOrFail($contactId);

            // Enviar el mensaje de texto
            $message = Whatsapp::message()->sendTextMessage(
                $phoneNumber->phone_number_id,
                $contact->country_code,
                $contact->phone_number,
                $messageContent
            );

            return response()->json(['success' => 'Mensaje enviado correctamente.', 'message' => $message]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al enviar el mensaje: ' . $e->getMessage()], 500);
        }
    }
}
