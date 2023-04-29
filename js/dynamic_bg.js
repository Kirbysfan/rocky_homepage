function dynaBg() {
    const banner = document.getElementById("banner");
    if (document.body.clientWidth <= 480) {
        banner.src = '../stub_p.svg';
    }
    else {
        banner.src = '../stub.svg';
    }
}
setInterval(dynaBg, 1);