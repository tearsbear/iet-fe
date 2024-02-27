<nav class="navbar navbar-expand-lg navbar-iet">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="assets/logo-alt.svg" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item nav-space">
                    <a class="nav-link link-item <?php 
    echo ((!isset($_GET['page']) || $_GET['page'] == 'home') ? 'nav-active' : 'nav-unactive');
?>" href="index.php?page=home" style="margin-top: -1px">Home</a>
                </li>
                <li class="nav-item nav-space">
                    <a class="nav-link link-item <?php echo (isset($_GET['page']) && $_GET['page'] == 'about') ? 'nav-active' : 'nav-unactive'; ?>"
                        href="index.php?page=about">About Us</a>
                </li>
                <li class="nav-item nav-space">
                    <a class="nav-link link-item <?php echo (isset($_GET['page']) && $_GET['page'] == 'news') ? 'nav-active' : 'nav-unactive'; ?>"
                        href="index.php?page=news">News & Events</a>
                </li>
                <li class="nav-item nav-space">
                    <a class="nav-link link-item <?php echo (isset($_GET['page']) && $_GET['page'] == 'project') ? 'nav-active' : 'nav-unactive'; ?>"
                        href="index.php?page=project">Projects</a>
                </li>
                <li class="nav-item nav-space dropdown">
                    <a class="nav-link font-inter-regular nav-drop" style="color: #fff;" href="#" role="button"
                        data-toggle="dropdown" aria-expanded="false">
                        <img src="assets/icons/globe-white.svg" style="vertical-align: sub;" alt=""> EN
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item active" href="#">English</a>
                        <a class="dropdown-item" href="#">Indonesian</a>
                    </div>
                </li>
                <li class="nav-item">
                    <form class="form-inline">
                        <div class="form-control input-search mr-sm-2">
                            <input type="text" class="font-poppins-regular" placeholder="Search" />
                        </div>
                        <img class="icon-search" src="assets/icons/search.svg" aria-hidden="true" alt="">
                        <a href="index.php?page=login" class="btn btn-login">Login</a>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</nav>