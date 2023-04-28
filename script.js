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
// Sliding background img
const imgArray = [
    "url(img/img-1.jpg)",
    "url(img/img-2.jpg)"
]

let bestSalesOne = document.getElementById("bestSalesOne");

let i = 0;

const slideShow = () => {
    bestSalesOne.style.backgroundImage = imgArray[i];
    if (i < imgArray.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // i = (i < imgArray.length - 1) ? i+1 : 0;
}

setInterval(slideShow, 6000)


