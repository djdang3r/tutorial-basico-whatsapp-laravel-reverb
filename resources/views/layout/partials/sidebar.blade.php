<!-- Menu Navigation starts -->
<nav>
    <div class="app-logo">
        <a class="logo d-inline-block" href="index.php">
            <img src="{{ asset('assets/images/logo/script-develop.png') }}" alt="#">
        </a>

        <span class="bg-light-primary toggle-semi-nav">
          <i class="ti ti-chevrons-right f-s-20"></i>
      </span>
    </div>
    <div class="app-nav" id="app-simple-bar">
        <ul class="main-nav p-0 mt-2">
            <li class="menu-title">
                <span>Dashboard</span>
            </li>
            <li>
                <a class="" data-bs-toggle="collapse" href="#dashboard" aria-expanded="false">
                    <i class="ph-duotone  ph-house-line"></i>
                    dashboard
                    {{-- <span class="badge text-bg-success badge-notification ms-2">4</span> --}}
                </a>
                {{-- <ul class="collapse" id="dashboard">
                    <li><a href="index.php">Ecommerce</a></li>
                    <li><a href="project_dashboard.php">Project</a></li>
                    <li><a href="crypto_dashboard.php">Crypto</a></li>
                    <li><a href="education.php">Education</a></li>
                </ul> --}}
            </li>



        </ul>
    </div>

    <div class="menu-navs">
        <span class="menu-previous"><i class="ti ti-chevron-left"></i></span>
        <span class="menu-next"><i class="ti ti-chevron-right"></i></span>
    </div>

</nav>
