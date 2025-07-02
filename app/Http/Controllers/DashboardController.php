<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ScriptDevelop\WhatsappManager\Facades\Whatsapp;
use ScriptDevelop\WhatsappManager\Models\WhatsappBusinessAccount;
use ScriptDevelop\WhatsappManager\Models\WhatsappPhoneNumber;

class DashboardController extends Controller
{
    public function index()
    {
        $phoneNumbers = [];

        try {
            $phoneNumbers = WhatsappPhoneNumber::with('businessProfile')
                ->orderBy('created_at', 'desc')
                ->get();

        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();
            return view('dashboard', compact('phoneNumbers', 'errorMessage'));
        }

        return view('dashboard', compact('phoneNumbers'));
    }
}
