<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ 'Crear hoja de vida' }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">

        <div class="wrapper">
            <!-- Sidebar  -->
            <nav id="sidebar">
                <div class="sidebar-header text-center">
                    <h3>Zxmbrxnx</h3>
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#"><i class="fas fa-chart-pie mr-2"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="#resumeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">

                            Resumes
                        </a>
                        <ul class="collapse list-unstyled" id="resumeSubmenu">
                            <li>
                                <a href="/resumes/create" class="pl-5"><i class="fas fa-plus"></i> Create resume</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <!-- Page Content  -->
            <div id="content" class="active">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div id="nav-icon3" class="open" onclick="$('#nav-icon3').toggleClass('open'); $('#sidebar, #content').toggleClass('active');">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="user-menu-wrap float-right">
                            @guest
                                @if (Route::has('login'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                    </li>
                                @endif

                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                    </li>
                                @endif
                            @else
                                <a class="mini-photo-wrapper" href="#"
                                    onclick="document.querySelector('.menu-container').classList.toggle('active');">
                                    {{ Auth::user()->name }}
                                    <b-avatar variant="primary"></b-avatar>
                                </a>
                                <div class="menu-container">
                                    <ul class="user-menu">
                                        <div class="profile-highlight">
                                            <b-avatar variant="primary"></b-avatar>
                                            <div class="details">
                                                <div id="profile-name">{{ Auth::user()->name }}</div>
                                                <div id="profile-footer">{{ Auth::user()->email }}</div>
                                            </div>
                                        </div>
                                        <li class="user-menu__item">
                                            <a class="user-menu-link" href="#">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/book.png"
                                                    alt="team_icon" width=20 height=20>
                                                <div>Log History</div>
                                            </a>
                                        </li>
                                        <div class="footer">
                                            <li class="user-menu__item">
                                                <a class="user-menu-link" style="color: #F44336;"
                                                    href="{{ route('logout') }}"
                                                    onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                                    {{ __('Logout') }} </a>
                                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                                    class="d-none">
                                                    @csrf
                                                </form>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            @endguest
                        </div>
                    </div>
                </nav>
                <main class="py-4">
                    @yield('content')
                </main>
            </div>
        </div>
    </div>
</body>

</html>
