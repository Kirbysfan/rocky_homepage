var ListEn = [
    "Spinning Rocky",
];
var DetailEn = [
    "<em>There's no need to be upset</em>",
];
var ListSC = [
    "旋转洛奇",
];
var DetailSC = [
    "转啊转啊转~",
];
var ListTC = [
    "旋转洛奇",
];
var DetailTC = [
    "转啊转啊转~",
];
var ListJP = [
    "回転ロッキー",
];
var DetailJP = [
    "<em>There's no need to be upset</em>",
];
var href = [
    "../playground/rotate_rocky/rotate_rocky.html",
]
function showList() {
    let lang = document.documentElement.lang.toLowerCase();
    var list = document.getElementById("pgList");
    if (lang === "en") {
        var i = 0;
        while (i <= ListEn.length - 1) {
            var a_title = document.createElement("a");
            a_title.href = href[i];
            var sector = document.createElement("div");
            sector.className = "story_sect _in_down";
            var s2 = document.createElement("div");
            s2.className = "sc_text";
            var title = document.createElement("h4");
            var detail = document.createElement("p");
            var hoshi = document.createElement("img");
            hoshi.src = "../icons/hoshi_w.svg";
            hoshi.className = "s_hoshi";
            title.innerHTML = ListEn[i];
            detail.innerHTML = DetailEn[i];
            sector.appendChild(hoshi);
            a_title.appendChild(title);
            s2.appendChild(a_title);
            s2.appendChild(detail);
            sector.appendChild(s2);
            list.appendChild(sector);
            i = i + 1;
        }
    }
    else if (lang === "zh-cn") {
        var i = 0;
        while (i <= ListSC.length - 1) {
            var a_title = document.createElement("a");
            a_title.href = href[i];
            var sector = document.createElement("div");
            sector.className = "story_sect _in_down";
            var s2 = document.createElement("div");
            s2.className = "sc_text";
            var title = document.createElement("h4");
            var detail = document.createElement("p");
            var hoshi = document.createElement("img");
            hoshi.src = "../icons/hoshi_w.svg";
            hoshi.className = "s_hoshi";
            title.innerHTML = ListSC[i];
            detail.innerHTML = DetailSC[i];
            sector.appendChild(hoshi);
            a_title.appendChild(title);
            s2.appendChild(a_title);
            s2.appendChild(detail);
            sector.appendChild(s2);
            list.appendChild(sector);
            i = i + 1;
        }
    }
    else if (lang === "ja-jp") {
        var i = 0;
        while (i <= ListSC.length - 1) {
            var a_title = document.createElement("a");
            a_title.href = href[i];
            var sector = document.createElement("div");
            sector.className = "story_sect _in_down";
            var s2 = document.createElement("div");
            s2.className = "sc_text";
            var title = document.createElement("h4");
            var detail = document.createElement("p");
            var hoshi = document.createElement("img");
            hoshi.src = "../icons/hoshi_w.svg";
            hoshi.className = "s_hoshi";
            title.innerHTML = ListJP[i];
            detail.innerHTML = DetailJP[i];
            sector.appendChild(hoshi);
            a_title.appendChild(title);
            s2.appendChild(a_title);
            s2.appendChild(detail);
            sector.appendChild(s2);
            list.appendChild(sector);
            i = i + 1;
        }
    }
    else if (lang === "zh-tw") {
        var i = 0;
        while (i <= ListSC.length - 1) {
            var a_title = document.createElement("a");
            a_title.href = href[i];
            var sector = document.createElement("div");
            sector.className = "story_sect _in_down";
            var s2 = document.createElement("div");
            s2.className = "sc_text";
            var title = document.createElement("h4");
            var detail = document.createElement("p");
            var hoshi = document.createElement("img");
            hoshi.src = "../icons/hoshi_w.svg";
            hoshi.className = "s_hoshi";
            title.innerHTML = ListTC[i];
            detail.innerHTML = DetailTC[i];
            sector.appendChild(hoshi);
            a_title.appendChild(title);
            s2.appendChild(a_title);
            s2.appendChild(detail);
            sector.appendChild(s2);
            list.appendChild(sector);
            i = i + 1;
        }
    }
}
setTimeout(showList, 1);