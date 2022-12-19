let line = document.querySelector('.icon-menu');
let links = document.querySelectorAll('.navigation_link');
let menu = document.querySelector('.menu__body');

line.addEventListener('click', function(event) {
  line.classList.toggle('active');  
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');  
});


const form = document.querySelector('.popup_background');
const openButton = document.querySelector('.proekts-link');
const closeButton = document.querySelector('.popup_close');

openButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.classList.remove('closen');
    form.classList.add('opened')
})

closeButton.addEventListener('click', (event) => {
    form.classList.remove('opened');
    form.classList.add('closen');
})