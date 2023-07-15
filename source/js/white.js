function isActive(pathname) {
    let rootPath = window.location.pathname
    let path = pathname + "/"
    return pathname === rootPath || path === rootPath;
}

let links = document.querySelectorAll(".nav-link");
for (let link of links) {
    let linkPath = link.getAttribute("href");

    if (isActive(linkPath)) {
        link.className = "active-link nav-link";
    }
}

let mlinks = document.querySelectorAll(".mobile-nav-link");
for (let mlink of mlinks) {
    let mlinkPath = mlink.getAttribute("href");
    if (isActive(mlinkPath)) {
        mlink.className = "moibile-active-link mobile-nav-link";
    }
}

// 设置收起的menu点击的效果
var mmenu = document.getElementById("mobile-menu");
var mmain = document.getElementById("mobile-main");
var mclose = document.getElementById("mobile-close");

mmenu.onclick = function () {
    mmain.style.display = "block";
}
mclose.onclick = function () {
    mmain.style.display = "none";
}

// 切换颜色
// let change = document.getElementById("theme-change-btn")
// let changeList = [
//     {
//         text: "白昼",
//         code: "day"
//     },
//     {
//         text: "午夜",
//         code: "night"
//     },
//     {
//         text: "饼干",
//         code: "cookie"
//     },
//     {
//         text: "森林",
//         code: "forest"
//     }
// ]
// var currentIndex = 0
// change.onclick = function (){
//     console.log("you click change theme btn and currentIndex = " + currentIndex)
//     currentIndex = (currentIndex + 1) % changeList.length;
//     this.innerHTML = changeList[currentIndex].text;
//     document.body.className = changeList[currentIndex].code;
//     // 将状态存入缓存中
//     localStorage.setItem('hexo-white-theme-mode', changeList[currentIndex].code);
// }
//
// let beginCode = localStorage.getItem('hexo-white-theme-mode') || "cookie" // day是默认
// let tmpElement = changeList.filter(item => item.code === beginCode)[0]
// change.innerHTML = tmpElement.text
// currentIndex = changeList.indexOf(tmpElement)
// document.body.className = tmpElement.code
// localStorage.setItem('hexo-white-theme-mode', tmpElement.code);

///////////////////////////////////////////////////////////////////////////////////

//设置sort的子目录隐藏显示效果
if (document.getElementById("sort")) {
    var sort = document.getElementById("sort");
    var sortdiv = document.getElementById("sort-div");

    sort.onmouseover = function () {
        sortdiv.style.display = "block";
    }
    sort.onmouseout = function () {
        sortdiv.onmouseover = function () {
            console.log("wuhu");
        }
        sortdiv.onmouseout = function () {
            sortdiv.style.display = "none";
        }
    }
}

// 图片懒加载
var imgs = document.querySelectorAll('img.lazyload-img');
var imgdivs = document.querySelectorAll('.lazyload-img-span');


// 用来判断bound.top<=clientHeight的函数，返回一个bool值
function isIn(el) {
    var bound = el.getBoundingClientRect();
    var clientHeight = window.innerHeight;
    return bound.top <= clientHeight;
}

// 检查图片是否在可视区内，如果在，则加载
function check() {
    for (let p = 0; p < imgs.length; p++) {
        if (isIn(imgs[p])) {
            loadImg(imgs[p]);
            imgs[p].onload = function () {
                let y = Number(p);
                changeClass(y);
            }
        }
    }
}

function changeClass(num) {
    console.log("changeClass(num) num = "+num)
    let tempse = Number(num);
    imgdivs[tempse].className = "lazyload-img-span img-masks";
}

function loadImg(el) {
    console.log("loadImg el.dataset.src = "+el.dataset.src)
    if (!el.src) {
        el.src = el.dataset.src;
    }
}

// onscroll()在滚动条滚动的时候触发
window.onload = window.onscroll = function () {
    check();
}