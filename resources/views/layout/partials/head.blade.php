{{-- Base Meta Tags --}}
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="csrf-token" content="{{ csrf_token() }}">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description"
        content="Multipurpose, super flexible, powerful, clean modern responsive bootstrap 5 admin template">
<meta name="keywords"
        content="admin template, ra-admin admin template, dashboard template, flat admin template, responsive admin template, web app">
<meta name="author" content="la-themes">
<meta name="mobile-web-app-capable" content="yes">

{{-- Custom Meta Tags --}}
@yield('meta_tags')

{{-- Title --}}
<title>
    @yield('title_prefix', 'Whatsapp')
    @yield('title', 'Script Develop')
    @yield('title_postfix', '')
</title>
