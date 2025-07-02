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

@stop

@section('css')
{{-- Add here extra stylesheets --}}
{{--
<link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')
<script>

</script>
@stop
