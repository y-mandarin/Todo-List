'use strict';

const button = document.querySelector(".open");
const box = document.querySelector(".box");

function showTodo(){
    box.classList.add('show_box');
}

function init(){
    button.addEventListener('click',showTodo);
}

init();