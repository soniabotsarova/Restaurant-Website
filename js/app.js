const buttonMenu = document.getElementById('button-menu');
const buttonReserv = document.getElementById('button-reserv');  
const body = document.getElementById('body');
const bgMenu = document.getElementById('bg-menu');
const bgReserv = document.getElementById('bg-reserv');

buttonMenu.addEventListener('mouseenter', () => {
    bgMenu.style.opacity = 1;
});

buttonReserv.addEventListener('mouseenter', () => {
    bgReserv.style.opacity = 1;
});

buttonMenu.addEventListener('mouseleave', () => {
    bgMenu.style.opacity = 0;
});
buttonReserv.addEventListener('mouseleave', () => {
    bgReserv.style.opacity = 0;
});




