'use strict';

const todo_form = document.querySelector(".todo_form");
const todo_input = todo_form.querySelector("input");
const ul = document.querySelector(".todo_list");
const TODO = 'todo';
let list = [];
let id = 0;

function handleButton(event){
    const li = event.target.parentNode;
    console.log(li);

    ul.removeChild(li);

    const new_list = list.filter(function (list){
        return list.id != li.id;
    })

    list = new_list;
    saveList();
}

function saveList(){
    localStorage.setItem(TODO, JSON.stringify(list));
}

function showList(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerText=text;
    btn.innerText="x";
    btn.addEventListener('click',handleButton);

    li.id = id;
    li.append(span);
    li.append(btn);
    ul.appendChild(li);

    const WTD={
        text:text,
        id: id++,
    }
    list.push(WTD);
    console.log(WTD);

    saveList();
}

function handleSubmit(event){
    event.preventDefault();
    const text = todo_input.value;
    
    showList(text);
    todo_input.value = "";
}

function loadTodo(){
    const todo_list = JSON.parse(localStorage.getItem(TODO));

    if(todo_list !== null)
        todo_list.forEach(function (element){ 
            showList(element.text);
        });
}

function init(){
    loadTodo();
    todo_form.addEventListener('submit',handleSubmit);
}

init();