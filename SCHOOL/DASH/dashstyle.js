
let alignBar = document.querySelector(".alignBar");
let sidebar = document.querySelector(".sidebar");

alignBar.onclick = function() {
    sidebar.classList.toggle("active");
}

let navLinks = document.querySelector(".navLinks");
let menubar = document.querySelector(".menubar");

menubar.onclick = function() {
    navLinks.classList.toggle("active");
}

// var navLinks = document.getElementById("navLinks");

// function showMenu() {
//     navLinks.style.right = "0";
// }
// function hideMenu() {
//     navLinks.style.right = "-210px";
// }