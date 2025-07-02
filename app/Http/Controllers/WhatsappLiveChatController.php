<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
}
