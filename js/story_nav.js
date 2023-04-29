import DetailEn from "./story_list.js";
function showNav() {
    const nav = document.getElementById('story_nav');
    //#region Outer Nav
    const navbar_main = document.createElement("nav");
    navbar_main.className = "navbar navbar-expand-lg navbar-dark story-nav fixed-top";
    navbar_main.id = "hw_nav";
    navbar_main.role = "banner";
    //#region Part 1
    const back_frame = document.createElement("div");
    const back = document.createElement("a");
    back.href = "../story.html";
    const back_img = document.createElement("img");
    back_img.src = "../../icons/story_back.svg";
    back_img.className = "button_img";
    back.appendChild(back_img);
    back_frame.appendChild(back);
    //#endregion
    //#region gap
    const gap = document.createElement("div");
    gap.className = "nav-gap";
    //#endregion
    //#region prev & next
    const control = document.createElement("div");
    control.className = "control";
    //#region prev
    const prev = document.createElement("a");
    const prev_img = document.createElement("img");
    prev_img.className = "button_img";
    prev_img.src = "../../icons/story_left.svg"
    prev.appendChild(prev_img);
    control.appendChild(prev);
    //#endregion
    //#region next
    const next = document.createElement("a");
    const next_img = document.createElement("img");
    next_img.className = "button_img";
    next_img.src = "../../icons/story_right.svg"
    next.appendChild(next_img);
    control.appendChild(next);
    //#endregion
    //#endregion
    //#region styles
    back.style.marginLeft = "16px";
    control.style.marginRight = "16px";
    //#endregion
    //#region judge
    function getHtmlDocName() {
        var str = window.location.href;
        str = str.substring(str.lastIndexOf("/") + 1);
        str = str.substring(0, str.lastIndexOf("."));
        return str;
    }
    var num = getHtmlDocName();
    prev.href = num - 1 + ".html";
    if (num - 1 < 0) {
        prev.style.pointerEvents = "none";
        prev_img.src = "../../icons/story_left_ng.svg"
    }
    next.href = (num - 1 + 2) + ".html";
    if (num - 1 + 3 > DetailEn.length) {
        next.style.pointerEvents = "none";
        next_img.src = "../../icons/story_right_ng.svg"
    }
    //#endregion
    navbar_main.appendChild(back_frame);
    navbar_main.appendChild(gap);
    navbar_main.appendChild(control);
    nav.appendChild(navbar_main);
    //#endregion
}

window.onload = showNav;