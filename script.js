//Function to make interactive the menu bar
let menu = document.getElementById("menu");
let header = document.getElementById("header");

function showMenu() {
    menu.style.display = "initial";
}

let responsiveBarShow = document.getElementById("responsiveBarShow");
responsiveBarShow.addEventListener("click", showMenu);

function hideMenu() {
    menu.style.display = "none";
}

let responsiveBarHide = document.getElementById("responsiveBarHide");
responsiveBarHide.addEventListener("click", hideMenu);

//Function to hide and show header
let mainLocation = window.pageYOffset;
window.onscroll = function () {
    let actualScrolling = window.pageYOffset;
    if (mainLocation >= actualScrolling) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-222px";
    }
    mainLocation = actualScrolling;
}
