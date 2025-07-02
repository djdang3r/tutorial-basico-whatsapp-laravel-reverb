<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ScriptDevelop\WhatsappManager\Facades\Whatsapp;

class WhatsappController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'waba_id' => 'required|numeric',
            'waba_api_token' => 'required|string',
        ]);

        try {
            $account = Whatsapp::account()->register([
                'api_token' => $request->waba_api_token,
                'business_id' => $request->waba_id
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Account registered successfully!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
