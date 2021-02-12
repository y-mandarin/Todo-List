'use strict';

const date = document.querySelector(".date");
const time = document.querySelector(".time");

function loadTime(){
    const clock = new Date();
    const year = clock.getFullYear();
    const month = clock.getMonth()+1;
    const day = clock.getDate();
    const hour = clock.getHours();
    const minute = clock.getMinutes();
    const second = clock.getSeconds();

    date.innerText=`${year}/${month < 10? `0${month}`: month}/${day < 10? `0${day}`: day}`;
    time.innerText=`${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

function init(){
    loadTime();
    setInterval(loadTime,1000);
}

init();