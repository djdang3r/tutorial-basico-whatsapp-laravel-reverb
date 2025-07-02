const profileContainer = document.querySelector(".card-profile-container");
profileContainer.style.display = "none";

const contactsContainer = document.querySelector(".chat-contact");
contactsContainer.innerHTML = "";

const chatContainer = document.querySelector(".chat-container");
chatContainer.innerHTML = "";

function selectTabPane($tabPane) {
    const tabPane_selected = document.querySelector("#tab-pane-selected");
    tabPane_selected.value = $tabPane;
    const whatsappPhoneNumberId = document.querySelector(
        "#whatsapp-phone-number-id"
    ).value;

    switch ($tabPane) {
        case "number-profile-tab-pane":
            loadProfile();
            break;
        case "template-tab-pane":
            loadTemplate(whatsappPhoneNumberId);
            break;
        case "whatsapp-chat-tab-pane":
            loadChat(whatsappPhoneNumberId);
            break;
        case "update-account-tab-pane":
            loadUpdateAccount(whatsappPhoneNumberId);
            break;
    }
}

function loadProfile() {
    const whatsappPhoneNumberId = document.querySelector(
        "#whatsapp-phone-number-id"
    ).value;
    if (!whatsappPhoneNumberId) {
        showAlert("warning", "Debe Seleccionar un NUmero de telefono.");
        return;
    }

    fetch(`{{ url('/phone-number') }}/${whatsappPhoneNumberId}/profile`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
                return;
            }

            // Actualiza los datos del perfil en la página
            const whatsappPhoneNumberId = document.querySelector(
                "#whatsapp-phone-number-id"
            );
            const tabPane_selected =
                document.querySelector("#tab-pane-selected");
            const profileImage = document.querySelector(".profile-image");
            const profileDescription = document.querySelector(
                ".profile-description"
            );
            const personDetailsName =
                document.querySelector(".person-details h5");
            const personDetailsDescription =
                document.querySelector(".person-details p");
            const emailElement = document.querySelector(
                ".about-list .email .float-end"
            );
            const contactElement = document.querySelector(
                ".about-list .contact .float-end"
            );
            const locationElement = document.querySelector(
                ".about-list .location .float-end"
            );
            const profileAddress = document.querySelector(".profile-address");
            const websiteElement = document.querySelector(
                ".about-list .website .float-end"
            );
            const githubElement = document.querySelector(
                ".about-list .github .float-end"
            );

            if (profileImage) {
                profileImage.innerHTML = `<img src="${data.business_profile.profile_picture_url}" alt="" class="img-fluid">`;
            }
            if (personDetailsName) {
                personDetailsName.innerHTML = `${data.verified_name} <img src="../assets/images/profile-app/01.png" class="w-20 h-20" alt="instagram-check-mark">`;
            }
            if (personDetailsDescription) {
                personDetailsDescription.innerText =
                    data.business_profile.description;
                profileDescription.innerText =
                    data.business_profile.description;
            }
            if (emailElement) {
                emailElement.innerText = data.business_profile.email;
            }
            if (contactElement) {
                contactElement.innerText = data.display_phone_number;
            }
            if (locationElement) {
                locationElement.innerText = data.business_profile.address;
            }

            if (profileAddress) {
                profileAddress.innerText = data.business_profile.address;
            }
            if (websiteElement) {
                websiteElement.innerText = data.business_profile.websites
                    .map((website) => website.website)
                    .join(", ");
            }
            if (githubElement) {
                githubElement.innerText = data.business_profile.github;
            }

            profileContainer.style.display = "block";
        })
        .catch((error) => {
            console.error("Error:", error);
            // alert('Error al cargar el perfil.');
            showAlert("danger", "Error al cargar el perfil.");
        });
}

function loadTemplate() {
    const whatsappPhoneNumberId = document.querySelector(
        "#whatsapp-phone-number-id"
    ).value;
    if (!whatsappPhoneNumberId) {
        showAlert("warning", "Debe Seleccionar un NUmero de telefono.");
        return;
    }

    fetch(`{{ url('/templates') }}/${whatsappPhoneNumberId}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
                return;
            }

            // Procesa los datos de la plantilla aquí
            console.log(data);
            // Llenar la tabla con los datos de la plantilla
            const tbody = document.getElementById("t-data");
            tbody.innerHTML = ""; // Limpiar el contenido existente

            data.forEach((template) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                            <th scope="row"><input class="form-check-input mt-0 ms-2" type="checkbox" name="item"></th>
                            <td class="id d-none">${template.template_id}</td>
                            <td class="employee">${template.name}</td>
                            <td class="email">${template.category}</td>
                            <td class="contact">${template.language}</td>
                            <td class="date">${new Date(
                                template.updated_at
                            ).toLocaleDateString()}</td>
                            <td class="status">
                                <span class="badge ${
                                    template.status === "APPROVED"
                                        ? "bg-success-subtle text-success"
                                        : "bg-danger-subtle text-danger"
                                } text-uppercase">${template.status}</span>
                            </td>
                            <td class="edit"><div class="btn-group btn-rtl">
                                <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Actions
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item modal-detailTemplate" data-bs-toggle="modal" data-bs-target="#modal_detail_template" href="#" data-template-name="${
                                        template.name
                                    }" data-template-id="${
                    template.template_id
                }" data-template-wa-id="${
                    template.wa_template_id
                }">Detalles de Plantilla</a></li>
                                    <li><a class="dropdown-item modal-editTemplate" data-bs-toggle="modal" data-bs-target="#modal_edit_template" href="#" data-template-name="${
                                        template.name
                                    }" data-template-id="${
                    template.template_id
                }" data-template-wa-id="${
                    template.wa_template_id
                }">Editar Plantilla</a></li>
                                    <li><a class="dropdown-item modal-sendTemplate" data-bs-toggle="modal" data-bs-target="#modal_send_template" href="#" data-template-name="${
                                        template.name
                                    }" data-template-id="${
                    template.template_id
                }" data-template-wa-id="${
                    template.wa_template_id
                }">Enviar Plantilla</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item modal-deleteTemplate" data-bs-toggle="modal" data-bs-target="#modal_delete_template" href="#">Eliminar Plantilla</a></li>
                                </ul>
                            </div></td>
                            <td class="remove"><button class="btn remove-item-btn btn-sm btn-danger">Remove</button></td>
                        `;

                tbody.appendChild(row);
                // Puedes actualizar el DOM con los datos de la plantilla si es necesario
            });
        })
        .catch((error) => {
            console.error("Error:", error);
            // alert('Error al cargar la plantilla.');
            showAlert("danger", "Error al cargar la plantilla.");
        });
}

function loadChat() {
    const whatsappPhoneNumberId = document.querySelector(
        "#whatsapp-phone-number-id"
    ).value;
    if (!whatsappPhoneNumberId) {
        showAlert("warning", "Debe Seleccionar un NUmero de telefono.");
        return;
    }

    fetch(`{{ url('/whatsapp-chat') }}/${whatsappPhoneNumberId}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
                return;
            }

            // Procesa los datos de la plantilla aquí
            console.log(data);
            const contactsContainer = document.querySelector(".chat-contact");
            contactsContainer.innerHTML = ""; // Limpiar el contenido existente

            Object.values(data).forEach((contact) => {
                const contactBox = document.createElement("div");
                contactBox.className = "chat-contactbox";
                contactBox.dataset.contactId = contact.contact_id;

                contactBox.innerHTML = `
                            <div class="position-absolute">
                                <span class="h-45 w-45 d-flex-center b-r-50 position-relative bg-primary">
                                    <img src="../assets/images/avtar/1.png" alt="" class="img-fluid b-r-50">
                                    <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                </span>
                            </div>
                            <div class="flex-grow-1 text-start mg-s-50">
                                <p class="mb-0 f-w-500 text-dark txt-ellipsis-1">${
                                    contact.contact_name
                                }</p>
                                <p class="text-secondary mb-0 f-s-12 mb-0 chat-message">
                                    <i class="ti ti-checks"></i> ${
                                        contact.phone_number
                                    }
                                </p>
                            </div>
                            <div>
                                <p class="f-s-12 chat-time">${new Date(
                                    contact.updated_at
                                ).toLocaleTimeString()}</p>
                            </div>
                        `;

                contactBox.addEventListener("click", function () {
                    loadChatHistory(contact.contact_id);
                });

                contactsContainer.appendChild(contactBox);
            });
            // Llenar la tabla con los datos de la plantilla
        })
        .catch((error) => {
            console.error("Error:", error);
            // alert('Error al cargar la plantilla.');
            showAlert("danger", "Error al cargar el chat.");
        });
}

function loadChatHistory(contactId) {
    const whatsappPhoneNumberId = document.querySelector(
        "#whatsapp-phone-number-id"
    ).value;
    const contactIdinput = document.querySelector("#contact-id");
    contactIdinput.value = contactId;

    if (!whatsappPhoneNumberId) {
        showAlert("warning", "Debe Seleccionar un Número de teléfono.");
        return;
    }

    fetch(`/chat-history/${contactId}/${whatsappPhoneNumberId}`)
        .then((response) => response.json())
        .then((data) => {
            const chatContainer = document.querySelector(".chat-container");
            chatContainer.innerHTML = ""; // Limpiar el contenido existente

            // Actualizar datos del contacto en el modal
            const contact = data.contact;
            const contactNameElement = document.querySelector("#contact-name");
            contactNameElement.textContent = contact.contact_name;
            document.querySelector("#contact-image").src =
                contact.profile_image_url || "../assets/images/avtar/14.png";

            data.messages.forEach((message) => {
                const messageElement = document.createElement("div");
                const isOutgoing = message.message_method === "OUTPUT";
                const messageTime = new Date(
                    message.timestamp * 1000
                ).toLocaleTimeString();

                messageElement.className = "position-relative";

                if (message.message_type === "TEXT") {
                    messageElement.innerHTML = `
                    <div class="${isOutgoing ? "chat-box-right" : "chat-box"}">
                        <div>
                            <p class="chat-text">${message.message_content}</p>
                            <p class="text-muted"><i class="ti ti-checks ${
                                message.readed_at ? "text-primary" : ""
                            }"></i> ${new Date(
                        message.created_at
                    ).toLocaleString()}</p>
                        </div>
                    </div>
                    `;
                } else if (message.message_type === "IMAGE") {
                    messageElement.innerHTML = `
                    <div class="${isOutgoing ? "chat-box-right" : "chat-box"}">
                        <div>
                            <img src="${
                                message.media_files[0].url
                            }" alt="" class="img-fluid">
                            <p class="text-muted"><i class="ti ti-checks ${
                                message.readed_at ? "text-primary" : ""
                            }"></i> ${new Date(
                        message.created_at
                    ).toLocaleString()}</p>
                        </div>
                    </div>
                    `;
                } else if (message.message_type === "DOCUMENT") {
                    messageElement.innerHTML = `
                    <div class="${isOutgoing ? "chat-box-right" : "chat-box"}">
                        <div>
                            <a href="${
                                message.media_files[0].url
                            }" target="_blank" class="btn btn-primary">${
                        message.message_content
                    }</a>
                            <p class="text-muted"><i class="ti ti-checks ${
                                message.readed_at ? "text-primary" : ""
                            }"></i> ${new Date(
                        message.created_at
                    ).toLocaleString()}</p>
                        </div>
                    </div>
                    `;
                } else if (message.message_type === "AUDIO") {
                    messageElement.innerHTML = `
                    <div class="${isOutgoing ? "chat-box-right" : "chat-box"}">
                        <div>
                            <audio controls>
                                <source src="${
                                    message.media_files[0].url
                                }" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p class="text-muted"><i class="ti ti-checks ${
                                message.readed_at ? "text-primary" : ""
                            }"></i> ${new Date(
                        message.created_at
                    ).toLocaleString()}</p>
                        </div>
                    </div>
                    `;
                } else if (message.message_type === "VIDEO") {
                    messageElement.innerHTML = `
                    <div class="${isOutgoing ? "chat-box-right" : "chat-box"}">
                        <div>
                            <video width="320" height="240" controls>
                                <source src="${
                                    message.media_files[0].url
                                }" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <p class="text-muted"><i class="ti ti-checks ${
                                message.readed_at ? "text-primary" : ""
                            }"></i> ${new Date(
                        message.created_at
                    ).toLocaleString()}</p>
                        </div>
                    </div>
                    `;
                }

                chatContainer.appendChild(messageElement);
            });

            // Scroll to the bottom of the chat container
            chatContainer.scrollTop = chatContainer.scrollHeight;
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error al cargar el historial de conversaciones.");
        });
}

function selectPhoneNumber(phone_number_id) {
    const tabPane_selected = document.querySelector("#tab-pane-selected");
    const whatsappPhoneNumberId = document.querySelector(
        "#whatsapp-phone-number-id"
    );

    whatsappPhoneNumberId.value = phone_number_id;

    switch (tabPane_selected.value) {
        case "number-profile-tab-pane":
            loadProfile(phone_number_id);
            break;
        case "template-tab-pane":
            loadTemplate();
            break;
        case "whatsapp-chat-tab-pane":
            loadChat();
            break;
        case "update-account-tab-pane":
            loadUpdateAccount();
            break;
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     const whatsappPhoneNumberId = document.querySelector('#whatsapp-phone-number-id').value;
//     if (!whatsappPhoneNumberId) {
//         showAlert('warning', 'Debe Seleccionar un Número de teléfono.');
//         return;
//     }

//     const sendMessageForm = document.getElementById('sendMessageForm');
//     const messageInput = document.getElementById('messageInput');
//     const chatContainer = document.querySelector('.chat-container');

//     sendMessageForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         alert('Send');

//         const whatsappPhoneNumberId = document.querySelector('#whatsapp-phone-number-id').value;
//         const contactId = document.querySelector('#contact-id').value;
//         const messageContent = messageInput.value.trim();

//         if (!whatsappPhoneNumberId) {
//             showAlert('warning', 'Debe Seleccionar un Número de teléfono.');
//             return;
//         }

//         if (!messageContent) {
//             showAlert('warning', 'El mensaje no puede estar vacío.');
//             return;
//         }

//         fetch('/send-message', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//             },
//             body: JSON.stringify({
//                 whatsapp_phone_id: whatsappPhoneNumberId,
//                 contact_id: contactId,
//                 message_content: messageContent,
//                 tipo: 'TEXT',
//                 type: 'OUTPUT'
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 const messageElement = document.createElement('div');
//                 messageElement.className = 'position-relative chat-box-right';
//                 messageElement.innerHTML = `
//                     <div>
//                         <p class="chat-text">${messageContent}</p>
//                         <p class="text-muted"><i class="ti ti-checks text-primary"></i> ${new Date().toLocaleString()}</p>
//                     </div>
//                 `;
//                 chatContainer.appendChild(messageElement);
//                 chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
//                 messageInput.value = ''; // Clear the input
//             } else {
//                 showAlert('danger', 'Error al enviar el mensaje.');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             showAlert('danger', 'Error al enviar el mensaje.');
//         });
//     });
// });

$(document).ready(function () {
    const sendMessageForm = $("#sendMessageForm");
    const messageInput = $("#messageInput");
    const chatContainer = $(".chat-container");

    sendMessageForm.on("submit", function (event) {
        event.preventDefault();

        const whatsappPhoneNumberId = $("#whatsapp-phone-number-id").val();
        const contactId = $("#contact-id").val();
        const messageContent = messageInput.val().trim();

        if (!whatsappPhoneNumberId) {
            showAlert("warning", "Debe Seleccionar un Número de teléfono.");
            return;
        }

        if (!messageContent) {
            showAlert("warning", "El mensaje no puede estar vacío.");
            return;
        }

        $.ajax({
            url: "/send-message",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            data: JSON.stringify({
                whatsapp_phone_id: whatsappPhoneNumberId,
                contact_id: contactId,
                message_content: messageContent,
                tipo: "OUTPUT",
                type: "TEXT",
            }),
            success: function (data) {
                if (data.success) {
                    const messageElement = $(`
                                <div class="position-relative chat-box-right">
                                    <div>
                                        <p class="chat-text">${messageContent}</p>
                                        <p class="text-muted"><i class="ti ti-checks text-primary"></i> ${new Date().toLocaleString()}</p>
                                    </div>
                                </div>
                            `);
                    chatContainer.append(messageElement);
                    chatContainer.scrollTop(chatContainer[0].scrollHeight); // Scroll to the bottom
                    messageInput.val(""); // Clear the input
                } else {
                    showAlert("danger", "Error al enviar el mensaje.");
                }
            },
            error: function (error) {
                console.error("Error:", error);
                showAlert("danger", "Error al enviar el mensaje.");
            },
        });
    });
});
