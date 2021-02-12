'use strict';

const user_form = document.querySelector(".user_form");
const user_input = user_form.querySelector("input");
const user_name = document.querySelector(".user_name");
const USER = 'user';
const SHOWING = 'showing';

function saveName(name){
    localStorage.setItem(USER,name);
}

function showName(name){
    user_form.classList.remove(SHOWING);
    user_name.innerText = `Hi! ${name}`;
    user_name.classList.add(SHOWING);
}

function handleSubmit(event){
    event.preventDefault();
    const name = user_input.value;
    saveName(name);
    showName(name);
}

function getName(){
    user_form.classList.add(SHOWING);
    user_form.addEventListener('submit', handleSubmit);
}

function loadName(){
    const name = localStorage.getItem(USER);

    if(name === null){
        getName();
    } else{
        showName(name);
    }
}

function init(){
    loadName();
}

init();