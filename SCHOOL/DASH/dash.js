let sidebar = document.querySelector('.sidebar');
let menubar = document.querySelector('.menubar');

menubar.onclick = () => {
    sidebar.classList.toggle('active');
}
let toggleInner = document.querySelector('.toggle-inner');
let toggleMenu = document.querySelector('.toggleMenu');

toggleMenu.onclick = () => {
    toggleInner.classList.toggle('active');
}

var navLinks = document.querySelector(".navLinks");

function showMenu() {
    navLinks.style.left = "0";
}
function hideMenu() {
    navLinks.style.left = "-300px";
}