const main = document.querySelector("main");
const NUM_OF_IMG = 4;

function showIMG(random){
    main.style.backgroundImage=`url('img/${random}.png')`;
}

function getRandom(num){
    return Math.ceil(Math.random()*num);
}

function init(){
    const random = getRandom(NUM_OF_IMG);
    showIMG(random);
}

init();