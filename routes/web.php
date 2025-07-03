<?php

use Illuminate\Support\Facades\Route;
use Livewire\Volt\Volt;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\WhatsappController;
use App\Http\Controllers\WhatsappLiveChatController;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::redirect('settings', 'settings/profile');
    Route::post('/whatsapp/register', [WhatsappController::class, 'register'])->name('whatsapp.register');
    Route::get('/whatsapp/livechat/{phoneNumberId}', [WhatsappLiveChatController::class, 'show'])->name('whatsapp.livechat');
    Route::get('/get-contact-messages', [WhatsappLiveChatController::class, 'getContactMessages']);
    Route::post('/send-text-message', [WhatsappLiveChatController::class, 'sendTextMessage']);

    Volt::route('settings/profile', 'settings.profile')->name('settings.profile');
    Volt::route('settings/password', 'settings.password')->name('settings.password');
    Volt::route('settings/appearance', 'settings.appearance')->name('settings.appearance');
});

require __DIR__.'/auth.php';
