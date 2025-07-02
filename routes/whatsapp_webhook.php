<?php

use Illuminate\Support\Facades\Route;
use ScriptDevelop\WhatsappManager\Http\Controllers\WhatsappWebhookController;

Route::prefix('whatsapp-webhook')->group(function () {
    Route::match(['get', 'post'], '/', [WhatsappWebhookController::class, 'handle'])->name('whatsapp.webhook.handle');
});
