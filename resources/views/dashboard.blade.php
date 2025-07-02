@extends('layout.app')

@section('title', 'Dashboard')

@section('content_header')
<div class="row m-1">
    <div class="col-12 ">
        <h4 class="main-title">Dashboard - Whatsapp API Cloud Manager</h4>
        <ul class="app-line-breadcrumbs mb-3">
            <li class="">
                <a href="{{ route('dashboard') }}" class="f-s-14 f-w-500">
                    <span>
                        <i class="ph-duotone  ph-stack f-s-16"></i> Home
                    </span>
                </a>
            </li>
            <li class="active">
                <a href="#" class="f-s-14 f-w-500">Whatsapp API Cloud Manager</a>
            </li>
        </ul>
    </div>
</div>
@stop

@section('content')
<div class="row">
    <div class="col-sm-4">
        <div class="card">
            <div class="card-body">
                <!-- Formulario de registro -->
                <form id="registerForm" class="form-horizontal">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <label for="waba_id">Whatsapp Business ID <code> Meta Account</code></label>
                            <input type="number" class="form-control form-control-border" id="waba_id" name="waba_id"
                                placeholder="Identificador de la cuenta de WhatsApp Business">
                        </div>
                        <div class="form-group">
                            <label for="waba_api_token">API Token
                                <code> Bearer Token</code></label>
                            <textarea class="form-control" id="waba_api_token" name="waba_api_token" rows="3"
                                placeholder="Token de acceso ..."></textarea>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-info">Register</button>
                        <button type="reset" class="btn btn-default float-right">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="col-md-8 col-xxl-8">
        <div class="card equal-card top-product-card">
            <div class="card-header card-header-title">
                <div class="d-flex">
                    <div>
                        <h5>WhatsApp Phone Numbers</h5>
                        <p class="text-secondary mb-0">Registered Numbers</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive app-scroll">
                    <table class="table align-middle top-products-table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Display Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Business Profile</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($phoneNumbers as $number)
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <!-- Imagen del perfil -->
                                            @if($number->businessProfile && $number->businessProfile->profile_picture_url)
                                                <img src="{{ $number->businessProfile->profile_picture_url }}"
                                                    alt="Profile Picture"
                                                    class="rounded-circle"
                                                    style="width: 60px; height: 60px; object-fit: cover;">
                                            @else
                                                <div class="rounded-circle bg-light d-flex align-items-center justify-content-center"
                                                    style="width: 60px; height: 60px;">
                                                    <i class="ph-duotone ph-device-mobile" style="font-size: 24px;"></i>
                                                </div>
                                            @endif
                                            <div>
                                                <strong>{{ $number->businessAccount->whatsapp_business_id }}</strong>
                                                <div class="text-muted small">ID: {{ $number->api_phone_number_id }}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ $number->display_phone_number }}</td>
                                    <td>
                                        <span class="badge {{ $number->quality_rating === 'GREEN' ? 'bg-success' : 'bg-warning' }}">
                                            {{ $number->quality_rating ?? 'N/A' }}
                                        </span>
                                    </td>
                                    <td>
                                        @if($number->businessProfile)
                                            <div class="business-profile-info">
                                                <strong>About:</strong> {{ $number->businessProfile->about }}<br>
                                                <strong>Address:</strong> {{ $number->businessProfile->address }}<br>
                                                <strong>Email:</strong> {{ $number->businessProfile->email }}<br>
                                                <strong>Vertical:</strong> {{ $number->businessProfile->vertical }}
                                            </div>
                                        @else
                                            <span class="text-muted">No business profile</span>
                                        @endif
                                    </td>
                                    <td>
                                        <!-- Botón Live Chat -->
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4" class="text-center">No phone numbers registered yet.</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@section('css')
{{-- Add here extra stylesheets --}}
{{--
<link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')
<script>
    $(document).ready(function () {
        // Manejar envío del formulario
        $('#registerForm').on('submit', function (e) {
            e.preventDefault();

            const wabaId = $('#waba_id').val();
            const apiToken = $('#waba_api_token').val();

            if (!wabaId || !apiToken) {
                alert('Please fill in all fields');
                return;
            }

            $.ajax({
                url: "{{ route('whatsapp.register') }}",
                method: 'POST',
                data: {
                    waba_id: wabaId,
                    waba_api_token: apiToken,
                    _token: "{{ csrf_token() }}"
                },
                beforeSend: function () {
                    $('#registerForm button').prop('disabled', true);
                    $('#registerForm button[type="submit"]').html('<span class="spinner-border spinner-border-sm" role="status"></span> Registering...');
                },
                success: function (response) {
                    if (response.success) {
                        // Recargar la página para mostrar los números actualizados
                        window.location.reload();
                    } else {
                        alert('Error: ' + response.message);
                    }
                },
                error: function (xhr) {
                    let errorMsg = 'An error occurred. Please try again.';
                    if (xhr.responseJSON && xhr.responseJSON.message) {
                        errorMsg = xhr.responseJSON.message;
                    }
                    alert('Error: ' + errorMsg);
                },
                complete: function () {
                    $('#registerForm button').prop('disabled', false);
                    $('#registerForm button[type="submit"]').text('Register');
                }
            });
        });
    });
</script>
@stop
