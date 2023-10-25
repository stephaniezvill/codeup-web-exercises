$(document).ready(function() {
    alert("jQuery is working!");
});
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'OPENWEATHER_API_KEY';
    let city = 'San Antonio'; // Default city
    mapboxgl.accessToken = 'MAPBOX_API_KEY';

    // Initialize Mapbox
    mapboxgl.accessToken = 'MAPBOX_API_KEY';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // Default center coordinates (New York)
        zoom: 9
    });

    // Add a marker
    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-74.5, 40]) // Default marker position (New York)
        .addTo(map);

    // Function to update marker position based on search
    function updateMarkerPosition(lat, lon) {
        marker.setLngLat([lon, lat]);
    }

    function updateWeather(city) {
        // Function to fetch current weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // Update current weather details in the HTML
                const currentConditions = document.getElementById('currentConditions');
                currentConditions.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Date: ${new Date(data.dt * 1000).toDateString()}</p>
                    <p>Temperature: ${Math.round(data.main.temp_min - 273.15)}°C - ${Math.round(data.main.temp_max - 273.15)}°C</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind: ${data.wind.speed} m/s</p>
                    <p>Pressure: ${data.main.pressure} hPa</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
                `;

                // Fetch five-day forecast
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        // Update five-day forecast cards
                        for (let i = 0; i < 5; i++) {
                            const forecastData = data.list[i * 8]; // Data for every 8th interval (3-hour intervals)
                            const day = new Date(forecastData.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

                            document.getElementById(`day${i + 1}`).textContent = day;
                            document.getElementById(`minTemp${i + 1}`).textContent = Math.round(forecastData.main.temp_min - 273.15);
                            document.getElementById(`maxTemp${i + 1}`).textContent = Math.round(forecastData.main.temp_max - 273.15);
                            document.getElementById(`description${i + 1}`).textContent = forecastData.weather[0].description;
                            document.getElementById(`humidity${i + 1}`).textContent = forecastData.main.humidity;
                            document.getElementById(`wind${i + 1}`).textContent = forecastData.wind.speed;
                            document.getElementById(`pressure${i + 1}`).textContent = forecastData.main.pressure;
                            document.getElementById(`icon${i + 1}`).src = `http://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`;
                        }
                    })
                    .catch(error => console.error('Error fetching forecast:', error));
            });

        // Function to fetch weather data based on coordinates
        // Function to fetch weather data based on coordinates
        function updateWeatherByCoordinates(lat, lon) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    // Update current weather details in the HTML
                    const currentConditions = document.getElementById('currentConditions');
                    currentConditions.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Date: ${new Date(data.dt * 1000).toDateString()}</p>
                    <p>Temperature: ${Math.round(data.main.temp_min - 273.15)}°C - ${Math.round(data.main.temp_max - 273.15)}°C</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind: ${data.wind.speed} m/s</p>
                    <p>Pressure: ${data.main.pressure} hPa</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
                `;
                })
                .catch(error => console.error('Error fetching current weather:', error));
        }

        // Function to handle marker dragend event
        function onDragEnd() {
            const lngLat = marker.getLngLat();
            updateWeatherByCoordinates(lngLat.lat, lngLat.lng);
        }

        marker.on('dragend', onDragEnd);

        // Function to handle mapFindButton click
        document.getElementById('mapFindButton').addEventListener('click', () => {
            const mapLocationInput = document.getElementById('mapLocationInput');
            const location = mapLocationInput.value;
            mapboxgl.geocodeForward(location, function (err, coordinates) {
                if (err || !coordinates.features.length) {
                    console.error('Error finding location:', err);
                } else {
                    const [lon, lat] = coordinates.features[0].center;
                    updateMarkerPosition(lat, lon);
                    updateWeatherByCoordinates(lat, lon);
                }
            });
        });


        // Function to handle "Find" button click
        document.getElementById('findButton').addEventListener('click', () => {
            const locationInput = document.getElementById('locationInput');
            city = locationInput.value;
            updateWeather(city);
        });