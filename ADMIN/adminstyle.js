let menuBar = document.querySelector('#menuBar');
let sidebar = document.querySelector('.sidebar');

menuBar.onclick = function(){
    sidebar.classList.toggle('active');
}