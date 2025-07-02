<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('layout.partials.head')

    {{-- Custom stylesheets (pre AdminLTE) --}}
    <!--custom css-->
    @yield('css')


    @include('layout.partials.css')

    <!-- Styles / Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
        <style>

        </style>
    @endif

    <!-- Styles -->
    @livewireStyles
    @livewireScripts
</head>

<body>
    <div class="app-wrapper">
        <div class="loader-wrapper">
            <div class="loader_16"></div>
        </div>

        @include('layout.partials.sidebar')

        <div class="app-content">
            @include('layout.partials.header')
            <main>
                <div class="container-fluid">
                    <div class="row">
                        @yield('content_header')
                        <div class="" id="alerts-content"></div>
                        @yield('content')
                    </div>
                </div>
            </main>
        </div>

         <!-- tap on top -->
        <div class="go-top">
            <span class="progress-value">
            <i class="ti ti-arrow-up"></i>
            </span>
        </div>

        @yield('modals')

    </div>

    @include('layout.partials.scripts')

    <!--custom js-->
    @yield('js')


</body>

</html>
