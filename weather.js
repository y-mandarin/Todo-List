const span = document.querySelector('.weather');
const API_KEY = '50c6341a532bc2544a0996b5e3fa18ff';
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const temp = json.main.temp;
            const location = json.name;
            span.innerText=`${temp} @ ${location}`;
        })
   
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function successCoords(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj={
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function failCoords(){
    console.log('fail to load coordinates');
}
    
function askCoords(){
    navigator.geolocation.getCurrentPosition(successCoords, failCoords);
}

function loadCoords(){
    const coords = localStorage.getItem(COORDS);

    if(coords === null){
        askCoords();
    } else {
        const parseCoords = JSON.parse(coords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();