function dynaBanner() {
    const banner = document.getElementById("banner");
    if (document.body.clientWidth <= 480) {
        banner.src = '../rocky_banner_p.webp';
    }
    else {
        banner.src = '../rocky_banner.webp';
    }
}
setInterval(dynaBanner, 1);