'use strict';
function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark rocky-nav" id="sideNav hw_nav" role="banner" style="background-color: #1E88E5">
                <a class="navbar-brand js-scroll-trigger">
                    <span class="d-block d-lg-none margin-banner">Welcome to Rocky's website!</span>
                    <span class="d-none d-lg-block">
                        <img class="img-fluid img-profile mx-auto mb-2 rocky_scale" src="../icons/hoshi_w.svg" alt />
                    </span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse special" id="navbarResponsive">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item"><a class="nav-link " href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link " href="about.html">About me</a></li>
                        <li class="nav-item"><a class="nav-link " href="story.html">Story</a></li>
                        <li class="nav-item"><a class="nav-link " href="gallery.html">Gallery</a></li>
                        <li class="nav-item"><a class="nav-link " href="playground.html">Playground</a></li>
                    </ul>
                    <div class="nav-gap"></div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><a class="nav-link" href="lang_new.html"><img src="../icons/lang_switch.svg" class="lang_switch" alt="" /> Language: English</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
ReactDOM.render(
    <Nav />,
    document.getElementById('rocky_nav')
)