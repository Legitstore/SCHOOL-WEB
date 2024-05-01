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