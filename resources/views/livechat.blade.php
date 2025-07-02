@extends('layout.app')

@section('title', 'WhatsApp Live Chat')

@section('content_header')
<div class="row m-1">
    <div class="col-12">
        <h4 class="main-title">WhatsApp Live Chat</h4>
        <ul class="app-line-breadcrumbs mb-3">
            <li class="">
                <a href="{{ route('dashboard') }}" class="f-s-14 f-w-500">
                    <span>
                        <i class="ph-duotone  ph-stack f-s-16"></i> Home
                    </span>
                </a>
            </li>
            <li class="">
                <a href="{{ route('dashboard') }}" class="f-s-14 f-w-500">Dashboard</a>
            </li>
            <li class="active">
                <a href="#" class="f-s-14 f-w-500">Live Chat</a>
            </li>
        </ul>
    </div>
</div>
@stop

@section('content')
<div class="row">
    <div class="col-md-3">
        <div class="card mb-4">
            <div class="card-header bg-light">
                <h5 class="mb-0">Business Profile</h5>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                    @if($phoneNumber->businessProfile && $phoneNumber->businessProfile->profile_picture_url)
                        <img src="{{ $phoneNumber->businessProfile->profile_picture_url }}" alt="Profile Picture"
                            class="rounded-circle me-3" style="width: 80px; height: 80px; object-fit: cover;">
                    @else
                        <div class="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                            style="width: 80px; height: 80px;">
                            <i class="ph-duotone ph-device-mobile" style="font-size: 32px;"></i>
                        </div>
                    @endif
                    <div>
                        <h4 class="mb-0">{{ $phoneNumber->display_phone_number }}</h4>
                        <p class="text-muted mb-0">{{ $phoneNumber->api_phone_number_id }}</p>
                    </div>
                </div>

                @if($phoneNumber->businessProfile)
                    <div class="business-info mt-4">
                        @if($phoneNumber->businessProfile->about)
                            <p><i class="ph-duotone ph-info me-2"></i> {{ $phoneNumber->businessProfile->about }}</p>
                        @endif
                        @if($phoneNumber->businessProfile->address)
                            <p><i class="ph-duotone ph-map-pin me-2"></i> {{ $phoneNumber->businessProfile->address }}</p>
                        @endif
                        @if($phoneNumber->businessProfile->email)
                            <p><i class="ph-duotone ph-envelope me-2"></i> {{ $phoneNumber->businessProfile->email }}</p>
                        @endif
                        @if($phoneNumber->businessProfile->vertical)
                            <p><i class="ph-duotone ph-buildings me-2"></i> {{ $phoneNumber->businessProfile->vertical }}</p>
                        @endif
                    </div>
                @else
                    <div class="alert alert-info mt-3">
                        <i class="ph-duotone ph-info me-2"></i> No business profile available
                    </div>
                @endif
            </div>
        </div>

        <div class="card">
            <div class="card-header bg-light">
                <h5 class="mb-0">Quick Actions</h5>
            </div>
            <div class="card-body">
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-primary">
                        <i class="ph-duotone ph-qr-code me-2"></i> Show QR Code
                    </button>
                    <button class="btn btn-outline-secondary">
                        <i class="ph-duotone ph-user-list me-2"></i> View Contacts
                    </button>
                    <button class="btn btn-outline-info">
                        <i class="ph-duotone ph-chart-bar me-2"></i> View Analytics
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-9">
        <div class="card">
            <div class="card-body p-0">
                <div class="row position-relative chat-container-box">
                    <div class="col-lg-4 col-xxl-3  box-col-5">
                        <div class="chat-div">
                            <div class="card">
                                @if($phoneNumber->businessProfile && $phoneNumber->businessProfile->profile_picture_url)
                                    <div class="card-header">
                                        <div class="d-flex align-items-center">
                                            <span class="chatdp h-45 w-45 d-flex-center b-r-50 position-relative bg-danger">
                                                <input type="hidden" name="phone_number_id" id="phone_number_id" value="{{ $phoneNumber->phone_number_id }}">
                                                <img src="{{ $phoneNumber->businessProfile->profile_picture_url ?? asset('assets/images/avtar/09.png') }}"
                                                    alt="{{ $phoneNumber->businessProfile->profile_picture_url ? 'Foto de perfil' : 'Foto por defecto' }}"
                                                    class="img-fluid b-r-50">
                                                <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                            </span>

                                            <div class="flex-grow-1 ps-2">
                                                <div class="fs-6"> {{ $phoneNumber->verified_name }}</div>
                                                <div class="text-muted f-s-12">Agent</div>
                                            </div>
                                            <div>
                                                <div class="btn-group dropdown-icon-none">
                                                    <a role="button" data-bs-placement="top" data-bs-toggle="dropdown"
                                                        data-bs-auto-close="true" aria-expanded="false">
                                                        <i class="ti ti-settings fs-5"></i>
                                                    </a>
                                                    <ul class="dropdown-menu" data-popper-placement="bottom-start">
                                                        <li><a class="dropdown-item" href="#"><i
                                                                    class="ti ti-brand-hipchat"></i> <span
                                                                    class="f-s-13">Chat Settings</span></a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#"><i
                                                                    class="ti ti-phone-call"></i> <span
                                                                    class="f-s-13">Contact Settings</span></a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#"><i class="ti ti-settings"></i>
                                                                <span class="f-s-13">Settings</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="close-togglebtn">
                                                <a class="ms-2 close-toggle" role="button"><i
                                                        class="ti ti-align-justified fs-5"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                                <div class="card-body">
                                    <div class="chat-tab-wrapper">
                                        <ul class="tabs chat-tabs">
                                            <li class="tab-link active" data-tab="1"><i
                                                    class="ph-fill  ph-chat-circle-text f-s-18 me-2"></i>Chat</li>
                                            <li class="tab-link" data-tab="2"><i
                                                    class="ph-fill  ph-wechat-logo f-s-18 me-2"></i>Updates</li>
                                            <li class="tab-link" data-tab="3"><i
                                                    class="ph-fill  ph-phone-call f-s-18 me-2"></i>Contact</li>
                                        </ul>
                                    </div>
                                    <div class="content-wrapper">

                                        <!-- tab 1 -->

                                        <div id="tab-1" class="tabs-content active">
                                            <div class="tab-wrapper">
                                                <div class="mt-3">
                                                    <ul class="nav nav-tabs app-tabs-primary tab-light-primary chat-status-tab border-0 justify-content-between mb-0 pb-0"
                                                        id="Basic" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link active" id="private-tab"
                                                                data-bs-toggle="tab" data-bs-target="#private-tab-pane"
                                                                type="button" role="tab"
                                                                aria-controls="private-tab-pane" aria-selected="true"
                                                                tabindex="-1"><i
                                                                    class="ph-fill  ph-lock-key-open me-2"></i>Private</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="groups-tab"
                                                                data-bs-toggle="tab" data-bs-target="#groups-tab-pane"
                                                                type="button" role="tab" aria-controls="groups-tab-pane"
                                                                aria-selected="false" tabindex="-1"><i
                                                                    class="ph-fill  ph-users-three me-2"></i>Group
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1090"></div>
                                                    <div class="tab-content" id="BasicContent">
                                                        <!-- Private Chat -->
                                                        <div class="tab-pane fade show active" id="private-tab-pane"
                                                            role="tabpanel" aria-labelledby="private-tab" tabindex="0">
                                                            <div class="chat-contact">
                                                                @foreach ($contacts as $contact)
                                                                    <div class="chat-contactbox" data-id="{{ $contact->contact_id }}">
                                                                        <div class="position-absolute">
                                                                            <span class="h-45 w-45 d-flex-center b-r-50 position-relative bg-primary">
                                                                                <img src="{{ $contact->profile_picture_url ?? asset('assets/images/avtar/1.png') }}"
                                                                                    alt="" class="img-fluid b-r-50">
                                                                                <span
                                                                                    class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                                            </span>
                                                                            <!-- Contenedor para el badge -->
                                                                            <div class="unread-badge-container"></div>
                                                                        </div>
                                                                        <div class="flex-grow-1 text-start mg-s-50">
                                                                            <p class="mb-0 f-w-500 text-dark txt-ellipsis-1">
                                                                                {{ $contact->contact_name }}{{ $contact->first_name && $contact->last_name ? ' - ' . $contact->first_name . ' ' . $contact->last_name : '' }}
                                                                            <p class="text-secondary mb-0 f-s-12 chat-message"><i
                                                                                    class="ti ti-checks"></i>
                                                                                {{ $contact->latestMessage($phoneNumber->phone_number_id)?->message_type !== 'TEXT' ? $contact->latestMessage($phoneNumber->phone_number_id)?->message_type : $contact->latestMessage($phoneNumber->phone_number_id)?->message_content ?? 'Sin mensajes' }}</p>
                                                                        </div>
                                                                        <div>
                                                                            <p class="f-s-12 chat-time">
                                                                                {{ $contact->latestMessage($phoneNumber->phone_number_id)?->created_at ? \Carbon\Carbon::parse($contact->latestMessage($phoneNumber->phone_number_id)?->created_at)->diffForHumans() : 'Sin tiempo' }}</p>
                                                                        </div>
                                                                    </div>
                                                                @endforeach
                                                            </div>
                                                        </div>
                                                        <!-- Group Chat -->
                                                        <div class="tab-pane fade" id="groups-tab-pane" role="tabpanel"
                                                            aria-labelledby="groups-tab" tabindex="0">
                                                            <div class="chat-contact chat-group-list">
                                                                <div class="chat-contactbox">
                                                                    <div class="position-absolute">
                                                                        <span class="h-45 w-45 d-flex-center b-r-50 position-relative bg-primary">
                                                                            <img src="{{ asset('assets/images/avtar/16.png') }}" alt="" class="img-fluid b-r-50">
                                                                            <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-grow-1 text-start mg-s-50">
                                                                        <p class="mb-0 f-w-500 text-dark txt-ellipsis-1">Contact Name</p>
                                                                        <p class="text-secondary mb-0 f-s-12 chat-message"><i class="ti ti-checks"></i> No messages</p>
                                                                    </div>
                                                                    <div>
                                                                        <p class="f-s-12 chat-time">Last message</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="float-end">
                                                            <div class="btn-group dropup  dropdown-icon-none">
                                                                <button
                                                                    class="btn btn-primary icon-btn b-r-22 dropdown-toggle active"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    data-bs-auto-close="true" aria-expanded="false">
                                                                    <i class="ti ti-plus"></i>
                                                                </button>
                                                                <ul class="dropdown-menu"
                                                                    data-popper-placement="bottom-start">
                                                                    <li><a class="dropdown-item" href="#"><i
                                                                                class="ti ti-brand-hipchat"></i> <span
                                                                                class="f-s-13">New Chat</span></a>
                                                                    </li>
                                                                    <li><a class="dropdown-item" href="#" data-action="new-contact">
                                                                        <i class="ti ti-user-plus me-1"></i>
                                                                        <span class="f-s-13">New Contact</span>
                                                                    </a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- tab 2 -->

                                        <div id="tab-2" class="tabs-content">
                                            <div class="chat-contact tabcontent">
                                                <div class="updates-box">
                                                    <div class="b-2-success b-r-50 p-1">
                                                        <span class="h-40 w-40 d-flex-center b-r-50 position-relative bg-primary">
                                                            <img src="{{ asset('assets/images/avtar/16.png') }}" alt="" class="img-fluid b-r-50">
                                                            <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                        </span>
                                                    </div>
                                                    <div class="flex-grow-1 text-start ps-2">
                                                        <span>Contact Name</span>
                                                        <p class="f-s-12 text-secondary mb-0">
                                                            No messages
                                                        </p>
                                                        <p class="f-s-12 text-secondary mb-0">
                                                            Last Message
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="float-end">
                                                <div class="btn-group dropdown-icon-none">
                                                    <button
                                                        class="btn btn-primary icon-btn b-r-22 dropdown-toggle active"
                                                        type="button" data-bs-toggle="dropdown"
                                                        data-bs-auto-close="true" aria-expanded="false">
                                                        <i class="ti ti-plus"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" data-popper-placement="bottom-start">
                                                        <li><a class="dropdown-item" href="#"><i
                                                                    class="ti ti-brand-hipchat"></i> <span
                                                                    class="f-s-13">New Chat</span></a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#"><i
                                                                    class="ti ti-phone-call"></i> <span
                                                                    class="f-s-13">New Contact</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- tab 3 -->

                                        <div id="tab-3" class="tabs-content">
                                            <div class="chat-contact tabcontent chat-contact-list">
                                                <div class="d-flex align-items-center py-3">
                                                    <div>
                                                        <span class="h-40 w-40 d-flex-center b-r-50 position-relative bg-info">
                                                            <img src="{{ asset('assets/images/avtar/13.png') }}" alt="" class="img-fluid b-r-50">
                                                            <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                        </span>
                                                    </div>
                                                    <div class="flex-grow-1 ps-2">
                                                        <p class="contact-name text-dark mb-0 f-w-500">Contact Name</p>
                                                        <p class="mb-0 text-secondary f-s-13">phone number</p>
                                                    </div>
                                                    <div>
                                                        <span class="h-35 w-35 text-outline-success d-flex-center b-r-50">
                                                            <i class="ti ti-phone-call"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span class="h-35 w-35 text-outline-primary d-flex-center b-r-50 ms-1">
                                                            <i class="ti ti-video"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="float-end">
                                                <div class="btn-group dropdown-icon-none">
                                                    <button
                                                        class="btn btn-primary icon-btn b-r-22 dropdown-toggle active"
                                                        type="button" data-bs-toggle="dropdown"
                                                        data-bs-auto-close="true" aria-expanded="false">
                                                        <i class="ti ti-plus"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" data-popper-placement="bottom-start">
                                                        <li><a class="dropdown-item" href="#"><i
                                                                    class="ti ti-brand-hipchat"></i> <span
                                                                    class="f-s-13">New Chat</span></a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#"><i
                                                                    class="ti ti-phone-call"></i> <span
                                                                    class="f-s-13">New Contact</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xxl-9 box-col-7">
                        <div class="d-lg-none">
                            <a class="me-3 toggle-btn" role="button"><i class="ti ti-align-justified"></i></a>
                        </div>
                        <div id="no-contact-message" class="text-center py-5">
                            <div class="icon-lg mx-auto mb-3">
                                <i class="ph-duotone ph-chats-circle text-muted" style="font-size: 5rem;"></i>
                            </div>
                            <h4 class="text-muted">Selecciona un contacto</h4>
                            <p class="text-muted">Por favor, selecciona un contacto de la lista para ver el historial de mensajes y comenzar a chatear.</p>
                        </div>
                        <div class="card chat-container-content-box">
                            <div class="card-header">
                                <div class="chat-header d-flex align-items-center">
                                    <div class="d-lg-none">
                                        <a class="me-3 toggle-btn" role="button"><i
                                                class="ti ti-align-justified"></i></a>
                                    </div>
                                    <a href="./profile.html">
                                        <span
                                            class="profileimg h-45 w-45 d-flex-center b-r-50 position-relative bg-light">
                                            <img src="{{ asset('assets/images/avtar/14.png') }}" alt="" class="img-fluid b-r-50">
                                            <span
                                                class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                        </span>
                                    </a>
                                    <div class="flex-grow-1 ps-2 pe-2">
                                        <div class="fs-6"> Jerry Ladies</div>
                                        <div class="text-muted f-s-12 text-success">Online</div>
                                    </div>
                                    <button type="button" class="btn btn-success h-45 w-45 icon-btn b-r-22 me-sm-2"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="ti ti-phone-call f-s-20"></i>
                                    </button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-body p-0">
                                                <div class="call">
                                                    <div class="call-div">
                                                        <img src="{{ asset('assets/images/profile-app/32.jpg') }}" class="w-100"
                                                            alt="">
                                                        <div class="call-caption">
                                                            <h2 class="text-white">Jerry Ladies</h2>
                                                            <div class="d-flex justify-content-center">
                                                                <span
                                                                    class="bg-success h-40 w-40 d-flex-center b-r-50 animate__animated animate__1 animate__shakeY animate__infinite call-btn pointer-events-auto"
                                                                    data-bs-dismiss="modal">
                                                                    <i class="ti ti-phone-call "></i>
                                                                </span>
                                                                <span
                                                                    class="bg-danger h-40 w-40 d-flex-center b-r-50 ms-4 call-btn pointer-events-auto"
                                                                    data-bs-dismiss="modal">
                                                                    <i class="ti ti-phone"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary h-45 w-45 icon-btn b-r-22 me-sm-2"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        <i class="ti ti-video f-s-20"></i>
                                    </button>
                                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-body p-0">
                                                <div class="call">
                                                    <div class="call-div pointer-events-auto">
                                                        <img src="{{ asset('assets/images/profile-app/25.jpg') }}" class="w-100"
                                                            alt="">

                                                        <div class="call-caption">
                                                            <div
                                                                class="d-flex justify-content-center align-items-center">

                                                                <span
                                                                    class="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                                                                    <i class="ti ti-microphone text-dark"></i>
                                                                </span>
                                                                <span data-bs-dismiss="modal"
                                                                    class="bg-danger h-45 w-45 d-flex-center b-r-50 ms-4 animate__pulse animate__animated animate__infinite animate__faster call-btn pointer-events-auto">
                                                                    <i class="ti ti-phone"></i>
                                                                </span>
                                                                <span
                                                                    class="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                                                                    <i class="ti ti-phone-pause text-dark"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="video-div">
                                                        <img src="{{ asset('assets/images/profile-app/31.jpg') }}"
                                                            class="w-100 rounded" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="btn btn-secondary h-45 w-45 icon-btn b-r-22 me-sm-2"
                                            data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                            <i class="ti ti-settings f-s-20"></i>
                                        </button>
                                        <ul class="dropdown-menu" data-popper-placement="bottom-start">
                                            <li><a class="dropdown-item" href="#"><i class="ti ti-brand-hipchat"></i>
                                                    <span class="f-s-13">Chat Settings</span></a>
                                            </li>
                                            <li><a class="dropdown-item" href="#"><i class="ti ti-phone-call"></i> <span
                                                        class="f-s-13">Contact Settings</span></a>
                                            </li>
                                            <li><a class="dropdown-item" href="#"><i class="ti ti-settings"></i> <span
                                                        class="f-s-13">Settings</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body chat-body">
                                <div class="chat-container ">

                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="chat-footer d-flex">
                                    <div class="app-form flex-grow-1">
                                        <div class="input-group">
                                            <span class="input-group-text bg-secondary ms-2 me-2 b-r-10 position-relative" style="color: white;">
                                                <a class="emoji-btn d-flex-center" role="button" style="color: white;">
                                                    <i class="ti ti-mood-smile f-s-18"></i>
                                                </a>
                                                <!-- Contenedor del emoji picker -->
                                                <div id="emojiPickerContainer" style="
                                                    position: absolute;
                                                    bottom: 40px;
                                                    left: 0;
                                                    z-index: 1050;
                                                    display: none;
                                                    width: 350px;
                                                    height: 400px;
                                                ">
                                                    <emoji-picker></emoji-picker>
                                                </div>
                                            </span>
                                            <input type="text" id="messageInput" class="form-control b-r-6" placeholder="Type a message" aria-label="Type a message">

                                            <!-- Botón de enviar (siempre visible) -->
                                            <button class="btn btn-sm btn-primary ms-2 me-2 b-r-4" type="button" id="sendTextBtn">
                                                <i class="ti ti-send"></i> <span>Send</span>
                                            </button>

                                            <!-- Botones de acciones (solo visibles en pantallas medianas y grandes) -->
                                            <div id="chat-action-buttons" class="d-none d-sm-flex">
                                                <button type="button" class="bg-secondary h-50 w-50 b-r-10 ms-1"
                                                        data-bs-toggle="modal" data-bs-target="#imageModal"
                                                        title="Enviar imagen">
                                                    <i class="ti ti-camera-plus f-s-18"></i>
                                                </button>
                                                <button type="button" class="bg-secondary h-50 w-50 b-r-10 ms-1"
                                                        data-bs-toggle="modal" data-bs-target="#audioModal"
                                                        title="Enviar audio">
                                                    <i class="ti ti-microphone f-s-18"></i>
                                                </button>
                                                <button type="button" class="bg-secondary h-50 w-50 b-r-10 ms-1"
                                                        data-bs-toggle="modal" data-bs-target="#interactiveModal"
                                                        title="Enviar mensaje interactivo">
                                                    <i class="ti ti-apps f-s-18"></i>
                                                </button>
                                                <button type="button" class="bg-secondary h-50 w-50 b-r-10 ms-1"
                                                        data-bs-toggle="modal" data-bs-target="#documentModal"
                                                        title="Enviar documento">
                                                    <i class="ti ti-paperclip f-s-18"></i>
                                                </button>
                                            </div>

                                            <!-- Menú desplegable para dispositivos móviles (solo visible en pantallas pequeñas) -->
                                            <div class="d-sm-none">
                                                <div class="btn-group dropdown-icon-none">
                                                    <a class="h-35 w-35 d-flex-center ms-1" role="button"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical"></i>
                                                    </a>
                                                    <ul class="dropdown-menu" data-popper-placement="bottom-start">
                                                        <li>
                                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#imageModal">
                                                                <i class="ti ti-camera-plus"></i>
                                                                <span class="f-s-13">Imagen</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#audioModal">
                                                                <i class="ti ti-microphone"></i>
                                                                <span class="f-s-13">Audio</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#documentModal">
                                                                <i class="ti ti-paperclip"></i>
                                                                <span class="f-s-13">Documento</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#interactiveModal">
                                                                <i class="ti ti-apps me-1"></i>
                                                                <span class="f-s-13">Mensaje interactivo</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@section('modals')

@stop

@section('css')

</style>
@stop

@section('js')

@stop
