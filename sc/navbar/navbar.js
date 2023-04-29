
function showNav() {
    const nav = document.getElementById('rocky_nav');
    //#region Outer Nav
    const navbar_main = document.createElement("nav");
    navbar_main.className = "navbar navbar-expand-lg navbar-dark rocky-nav fixed-top";
    navbar_main.role = "banner";
    nav.appendChild(navbar_main);
    //#region Part1
    const nav_a = document.createElement("a");
    nav_a.className = "navbar-brand js-scroll-trigger";
    const s1 = document.createElement("span");
    s1.className = "d-block d-lg-none margin-banner";
    s1.innerHTML = '<img src="../icons/hoshi_w.svg" class="rocky_scale_c">';
    nav_a.appendChild(s1)
    const s2 = document.createElement("span");
    s2.className = "d-none d-lg-block";
    const s2_img = document.createElement("img");
    s2_img.className = "img-fluid img-profile mx-auto mb-2 rocky_scale";
    s2_img.src = "../icons/hoshi_w.svg";
    s2.appendChild(s2_img);
    nav_a.appendChild(s2);
    //#endregion
    //#region Part2
    const nav_b = document.createElement("button");
    nav_b.className = "navbar-toggler";
    nav_b.type = "button"
    nav_b.setAttribute("data-bs-toggle", "collapse");
    nav_b.setAttribute("data-bs-target", "#navbarResponsive");
    nav_b.setAttribute("aria-controls", "NavbarResponsive")
    nav_b.setAttribute("aria-expanded", "false");
    nav_b.setAttribute("aria-label", "Toggle navigation");
    const nav_b_s = document.createElement("span");
    nav_b_s.className = "navbar-toggler-icon";
    nav_b.appendChild(nav_b_s);
    //#endregion
    //#region Part3
    const nav_c = document.createElement("div");
    nav_c.className = "collapse navbar-collapse special";
    nav_c.id = "navbarResponsive"
    //#region Navigation
    const nav_ul = document.createElement("ul");
    nav_ul.className = "navbar-nav mr-auto mt-2 mt-lg-0"
    //#region li
    const l1 = document.createElement("li");
    const l2 = document.createElement("li");
    const l3 = document.createElement("li");
    const l4 = document.createElement("li");
    const l5 = document.createElement("li");
    //#endregion
    //#region li class="nav-item"
    l1.className = "nav-item";
    l2.className = "nav-item";
    l3.className = "nav-item";
    l4.className = "nav-item";
    l5.className = "nav-item";
    //#endregion
    //#region a
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const a4 = document.createElement("a");
    const a5 = document.createElement("a");
    //#endregion
    //#region a class="nav-link"
    a1.className = "nav-link";
    a2.className = "nav-link";
    a3.className = "nav-link";
    a4.className = "nav-link";
    a5.className = "nav-link";
    //#endregion
    //#region a href
    a1.href = "index.html";
    a2.href = "about.html";
    a3.href = "story.html";
    a4.href = "gallery.html";
    a5.href = "playground.html";
    //#endregion
    //#region a innerHTML
    a1.innerHTML = "首页";
    a2.innerHTML = "关于我";
    a3.innerHTML = "故事";
    a4.innerHTML = "相册";
    a5.innerHTML = "游园地";
    //#endregion
    l1.appendChild(a1);
    l2.appendChild(a2);
    l3.appendChild(a3);
    l4.appendChild(a4);
    l5.appendChild(a5);
    nav_ul.appendChild(l1);
    nav_ul.appendChild(l2);
    nav_ul.appendChild(l3);
    nav_ul.appendChild(l4);
    nav_ul.appendChild(l5);
    //#endregion
    //#region Gap
    const gap = document.createElement("div")
    gap.className = "nav-gap";
    //#endregion
    //#region Lang
    const nav_ul1 = document.createElement("ul");
    nav_ul1.className = "navbar-nav mr-auto nul1";
    const lang = document.createElement("li");
    lang.className = "nav-item"
    const l_a = document.createElement("a");
    l_a.className = "nav-link";
    l_a.href = "../lang_new.html";
    l_a.innerHTML = '<img src="../icons/lang_switch.svg" class="lang_switch" alt="" /> 语言：简体中文';
    lang.appendChild(l_a);
    nav_ul1.appendChild(lang);
    //#endregion
    nav_c.appendChild(nav_ul);
    nav_c.appendChild(gap);
    nav_c.appendChild(nav_ul1);
    //#endregion
    //#region styles
    navbar_main.style = "background-color: #1E88E5";
    s1.style = "margin-left: 16px";
    nav_b.style = "margin-right: 16px";
    nav_ul1.style = "text-align: center;";
    nav_ul.style = "background-color: #1E88E5; text-align: center;"
    //#endregion
    navbar_main.appendChild(nav_a);
    navbar_main.appendChild(nav_b);
    navbar_main.appendChild(nav_c);
    //#endregion
}
window.onload = showNav;