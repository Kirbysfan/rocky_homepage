var ListEn = [
    "How did Rocky come to the Meow Kingdom?",
    "Two brown cats.",
    "My amazing journey of decorating home.",
    "Travel to the Sky Islands - Part A"
];
var DetailEn = [
    "You means how did I become a software engineer here? That's a long story...",
    "It's hard to believe that I'm making new friends right after I moved here!",
    "Hmm… It's time to make my new home a satisfying place for me!",
    "I'm sure this trip will be exciting!"
];
var ListSC = [
    "洛奇是怎么来到喵王国的？",
    "两只棕色喵喵",
    "装饰新家时的神奇历程",
    "空岛之旅 - 上"
];
var DetailSC = [
    "你是说我是如何成为喵王国的软件工程师的吗？说来话长。。。",
    "我居然刚搬到这里就交到了新朋友！",
    "嗯。。。该把我的新家变成成令我满意的地方喵！",
    "这场旅行一定会很令喵激动的！"
];
var ListTC = [
    "洛奇是怎麼來到喵王國的？",
    "兩隻棕色喵喵",
    "裝飾新家時的神奇歷程",
    "空島之旅 - 上"
]
var DetailTC = [
    "你是說我是如何成為喵王國的軟體工程師的嗎？說來話長。 。 。",
    "我居然剛搬到這裡就交到了新朋友！",
    "嗯。 。 。該把我的新家變成成令我滿意的地方喵！",
    "這場旅行一定會很令喵激動的！"
]
var ListJP = [
    "How did Rocky come to the Meow Kingdom?",
    "Two brown cats.",
    "My amazing journey of decorating home.",
    "Travel to the Sky Islands - Part A"
];
var DetailJP = [
    "You means how did I become a software engineer here? That's a long story...",
    "It's hard to believe that I'm making new friends right after I moved here!",
    "Hmm… It's time to make my new home a satisfying place for me!",
    "I'm sure this trip will be exciting!"
];
function showList() {
    let lang = document.documentElement.lang.toLowerCase();
    var list = document.getElementById("StoryList");
    if (lang === "en") {
        var i = 0;
        while (i <= ListEn.length - 1) {
            var a_title = document.createElement("a");
            a_title.href = 'story/' + i + '.html';
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
            a_title.href = 'story/' + i + '.html';
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
            a_title.href = 'story/' + i + '.html';
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
            a_title.href = 'story/' + i + '.html';
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
} function getHtmlDocName() {
    var str = window.location.href;
    str = str.substring(str.lastIndexOf("/") + 1);
    str = str.substring(0, str.lastIndexOf("."));
    return str;
}
if (getHtmlDocName() === "story") {
    setTimeout(showList, 1);
}

export default DetailEn;