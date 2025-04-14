

const btnleft = document.querySelector('.button-arrow.-left');
const btnRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements');
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;

});
btnleft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;

});