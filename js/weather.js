"use strict";

let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.48, 29.42])
    .addTo(map);

const onDragUpdateWeather = () =>{
    const lngLat = marker.getLngLat();
    fetchWeatherForecast(lngLat.lat, lngLat.lng);
}
marker.on('dragend', onDragUpdateWeather);

map.on('click', function(e) {
    const latitude = e.lngLat.lat;
    const longitude = e.lngLat.lng;
    fetchWeatherForecast(latitude, longitude);
});

function fetchWeatherForecast(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${latitude}&lon=${longitude}` +
        `&appid=${OPENWEATHER_API_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            console.log(forecast);
            displayForecast(forecast);
        });
}

fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPENWEATHER_API_KEY}` + `&units=imperial`)
    .then( data => data.json())
    .then( currentWeather => { displayForecast(currentWeather);
    });


function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

function dateFromTimeStamp(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = appendLeadingZeroes(dateTime.getMonth() + 1);
    let day = dateTime.getUTCDate();
    let hours = dateTime.getHours();
    return `${year}-${month}-${day} ${hours}:00`;
}

// JavaScript
mapboxgl.accessToken = "pk.eyJ1IjoiamVubmlmZXJsYSIsImEiOiJjbG80b2diMDMwM2diMm1sbWFveWtpbDY3In0.L9ygQztWL1Y61drKc2eBiQ";

const apiKey = "OPENWEATHER_API_KEY";

function displayForecast(forecast) {

    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < forecast.list.length; i+= 8) {
            let weather = forecast.list[i];
            let index = i/8;
            const card = cards[index];
        card.querySelector('.card-body').innerHTML="";
            const time = document.createElement("p");

            // Display Weather Icon
            const weatherIcon = document.createElement("img");
            weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
            weatherIcon.alt = "Weather Icon";
            card.querySelector('.card-body').appendChild(weatherIcon);

            // Display Date and Time
            time.innerText = dateFromTimeStamp(weather.dt);
            card.querySelector('.card-body').appendChild(time);

            // Display Min and Max Temperature
            const minTemp = document.createElement("p");
            minTemp.innerText = `Min Temp: ${weather.main.temp_min}°F`;
            card.querySelector('.card-body').appendChild(minTemp);

            const maxTemp = document.createElement("p");
            maxTemp.innerText = `Max Temp: ${weather.main.temp_max}°F`;
            card.querySelector('.card-body').appendChild(maxTemp);

            // Display Description
            const description = document.createElement("p");
            description.innerText = `Weather: ${weather.weather[0].description}`;
            card.querySelector('.card-body').appendChild(description);

            // Display Humidity
            const humidity = document.createElement("p");
            humidity.innerText = `Humidity: ${weather.main.humidity}%`;
            card.querySelector('.card-body').appendChild(humidity);

            // Display Wind
            const wind = document.createElement("p");
            wind.innerText = `Wind: ${weather.wind.speed} mph`;
            card.querySelector('.card-body').appendChild(wind);

            // Display Pressure
            const pressure = document.createElement("p");
            pressure.innerText = `Pressure: ${weather.main.pressure}`;
            card.querySelector('.card-body').appendChild(pressure);
        }
}

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${apiKey}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(forecast => {
        console.log(forecast);
        displayForecast(forecast);
    });

// Select the form and input elements
const form = document.getElementById('weatherSearchForm');
const input = document.getElementById('locationInput');

// Add event listener to form
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the location from the input field
    const location = input.value;

    // Fetch the weather data for the location
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}` +
        `&appid=${OPENWEATHER_API_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            console.log(forecast);
            displayForecast(forecast);
        });
});
