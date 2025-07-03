import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});


const type = import.meta.env.WHATSAPP_BROADCAST_CHANNEL_TYPE || 'public';

// Configuración de canales
const getChannel = (channelName) => {
    return type === 'private'
        ? window.Echo.private(channelName)
        : window.Echo.channel(channelName);
};

// Canal: whatsapp-messages (maneja múltiples tipos de mensajes)
const messagesChannel = getChannel('whatsapp-messages');

messagesChannel
    .listen('.MessageReceived', (e) => {
        console.log("MessageReceived:", e);

        // ====================================
        // Módulo de Utilidades
        // ====================================
        const Utils = {
            generateMessageId: (message) => {
                if (message.id) return message.id;
                if (message.timestamp && message.contact_id) {
                    return `${message.timestamp}_${message.contact_id}`;
                }

                const content = message.message_content || JSON.stringify(message);
                let hash = 0;
                for (let i = 0; i < content.length; i++) {
                    hash = ((hash << 5) - hash) + content.charCodeAt(i);
                    hash |= 0;
                }
                return `gen_${hash}`;
            },

            getFormattedTime: (message) => {
                return message.time || new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            },
        };

        // ====================================
        // Módulo de Renderizado de Mensajes
        // ====================================
        const MessageRenderer = {
            renderBase: (content, isOutgoing, messageTime, isRead) => {
                const readIcon = isRead ? "text-primary" : "";
                return `
                    <div class="position-relative">
                        <div class="${isOutgoing ? "chat-box-right" : "chat-box"}">
                            <div class="message-actions position-absolute top-0 end-0 mt-1 me-2">
                                <div class="btn-group dropdown-icon-none">
                                    <a role="button" data-bs-placement="top" data-bs-toggle="dropdown"
                                    data-bs-auto-close="true" aria-expanded="false"
                                    class="message-action-trigger">
                                        <i class="ti ti-dots-vertical fs-5"></i>
                                    </a>
                                    <ul class="dropdown-menu" data-popper-placement="bottom-start">
                                        <li>
                                            <a class="dropdown-item send-reaction" href="#">
                                                <i class="ti ti-brand-hipchat me-1"></i>
                                                <span class="f-s-13">Reacción</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item send-reply" href="#">
                                                <i class="ti ti-arrow-back-up me-1"></i>
                                                <span class="f-s-13">Responder</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            ${content}
                            <p class="text-muted">
                                <i class="ti ti-checks ${readIcon}"></i>
                                ${messageTime}
                            </p>
                        </div>
                    </div>
                `;
            },

            renderText: (message, messageTime, isOutgoing, isRead) => {
                const content = `<p class="chat-text">${message.message_content || message.content || 'Sin contenido'}</p>`;
                return MessageRenderer.renderBase(content, isOutgoing, messageTime, isRead);
            }
        };

        // Mapeo de tipos de mensaje a funciones de renderizado
        const MESSAGE_TYPE_HANDLERS = {
            'TEXT': MessageRenderer.renderText,
        };

        // ====================================
        // Módulo Principal de Gestión de Mensajes
        // ====================================
        const MessageManager = {
            processedMessages: new Set(),

            handleAnyMessage: (e) => {
                try {
                    const eventData = typeof e.data === 'string' ? JSON.parse(e.data) : e.data || e;
                    const message = eventData.message || eventData;
                    const phoneNumberId = $('#phone_number_id').val();
                    const activeContactId = $('.chat-contactbox.active').data('id');

                    // Generar ID único para evitar duplicados
                    const messageId = Utils.generateMessageId(message);

                    if (MessageManager.processedMessages.has(messageId)) {
                        return;
                    }

                    MessageManager.processedMessages.add(messageId);

                    // Si es el contacto activo, renderizar mensaje
                    if (activeContactId && phoneNumberId &&
                        String(message.contact_id) === String(activeContactId) &&
                        String(message.whatsapp_phone_id) === String(phoneNumberId)) {

                        MessageManager.renderMessage(message);
                    }

                } catch (err) {
                    console.error('Error procesando mensaje:', err, e);
                }
            },


            renderMessage: (message) => {
                const chatContainer = $('.chat-container');
                const messageType = (message.message_type || '').toUpperCase();
                const messageTime = Utils.getFormattedTime(message);
                const isOutgoing = message.is_sent;
                const isRead = message.is_read || false;

                const renderHandler = MESSAGE_TYPE_HANDLERS[messageType] || MessageRenderer.renderUnsupported;
                const contentHTML = renderHandler(message, messageTime, isOutgoing, isRead);

                const messageElement = document.createElement("div");
                messageElement.innerHTML = contentHTML;
                chatContainer.append(messageElement);

                chatContainer.scrollTop(chatContainer.prop("scrollHeight"));
            },

            clearProcessedMessages: () => {
                MessageManager.processedMessages.clear();
            }
        };

        // ====================================
        // Configuración de Eventos y Canales
        // ====================================
        const EVENT_CONFIG = {
            MESSAGE_EVENTS: [
                'MessageReceived',
                'TextMessageReceived',
            ],

            setupListeners: () => {
                EVENT_CONFIG.MESSAGE_EVENTS.forEach(event => {
                    messagesChannel.listen(`.${event}`, MessageManager.handleAnyMessage);
                });
            },

            initialize: () => {
                EVENT_CONFIG.setupListeners();
            }
        };

        // ====================================
        // Inicialización del sistema
        // ====================================
        EVENT_CONFIG.initialize();
    })
    .listen('.TextMessageReceived', (e) => {
        console.log("TextMessageReceived:", e);
    })
    .listen('.MediaMessageReceived', (e) => {
        console.log("MediaMessageReceived:", e);
    })
    .listen('.InteractiveMessageReceived', (e) => {
        console.log("InteractiveMessageReceived:", e);
    })
    .listen('.LocationMessageReceived', (e) => {
        console.log("LocationMessageReceived:", e);
    })
    .listen('.ReactionReceived', (e) => {
        console.log("ReactionReceived:", e);
    })
    .listen('.ContactMessageReceived', (e) => {
        console.log("ContactMessageReceived:", e);
    })
    .listen('.InteractiveMessageReceived', (e) => {
        console.log("InteractiveMessageReceived:", e);
    });


