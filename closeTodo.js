'use strict';

const button2 = document.querySelector('.close');
const box2 = document.querySelector('.box');

function closeTodo(){
    box2.classList.remove('show_box');
}

function init(){
    button2.addEventListener('click',closeTodo);
}

init();