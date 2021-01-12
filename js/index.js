// Your code goes here
const header = document.querySelector(".main-navigation")
const introImg = document.querySelector(".intro img")
const h1 = document.querySelector("h1")
const body = document.querySelector("body")
const h2 = document.querySelector("h2")
const headerIntro = document.querySelector(".intro")
const textContent = document.querySelector(".text-content")
const h4 = document.querySelectorAll("h4")


//////Mouseout and mouseover

header.addEventListener("mouseover", event);
header.onmouseover = function (event) {
    header.style.backgroundColor = "blue";
}

header.addEventListener("mouseout", event);
header.onmouseout = function (event) {
    header.style.backgroundColor = "white";
}

////////Keydown/up

body.addEventListener("keydown", event);
body.onkeydown = function (event) {
    h1.textContent = "WEEEEEEEEEEEEEE"
}

body.addEventListener("keyup", event);
body.onkeyup = function (event) {
    h2.textContent = "Welcome to WEEEEEEEEEEEEEEEE Bus!"
}

////////doubleclick

introImg.addEventListener("doubleclick", event);
introImg.ondblclick = function (event) {
    headerIntro.style.backgroundColor = "grey"
}

///////onwheel

body.addEventListener("wheel", event);
body.onwheel = function (event) {
    h1.style.fontSize = "90px"
}

/////onload

window.addEventListener("load", event);
window.onload = function (event) {
    console.log("seems to be working?")
}

//////onclick

body.addEventListener("click", event);
body.onclick = function (event) {
    textContent.style.background = "pink";
}

/////scroll

body.addEventListener("scroll", event);
body.onscroll = function (event) {
    h4[0].textContent = "YOU SCROLLED IT"
    h4[1].textContent = "YOU SCROLLED IT"
    h4[2].textContent = "YOU SCROLLED IT"
}

/////mouseEnter

introImg.addEventListener("mouseenter", function (event) {
    body.style.background = "grey"
})
introImg.addEventListener("mouseleave", function (event) {
    body.style.background = "white"
})
