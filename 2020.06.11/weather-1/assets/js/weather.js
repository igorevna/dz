;(function(){
    
    function getWeatherData(cityName) {
        fetch(`http://api.weatherstack.com/current?access_key=937c83b0d7af7a05af75b75eaf5a1630&query=${cityName}`)
        .then( (response) => {
            return response.json();
        })
        .then( (data) => {
            buildWeatherWidget(data);
        })
    }

    function buildWeatherWidget(weatherData) {
        
        let type = 'sunny';
        const cloud = weatherData.weather_descriptions;

        if(cloud > 30 && cloud < 60) {
            type = 'cloud-sun';
        } else if(cloud >=60) {
            type = 'cloud'
        }

        if(weatherData.rain) {
            type = 'rain';
        }

        document.getElementById('weather-app').innerHTML = `
            <div class="weather-widget-place">
                <span>${weatherData.location.name}</span>
                <span>${weatherData.location.country}</span>
            </div>
            <div class="weather-widget-main">
                <div class="weather-widget-main-temp">
                    ${ (weatherData.current.temperature).toFixed(0) }&deg;C
                </div>
                <div class="weather-widget-main-type ${type}">
                    <i></i>
                    <p></p>
                </div>
            </div>
            <div class="weather-widget-details">
                <div class="weather-widget-details-item">
                    <h4>Wind</h4>
                    ${weatherData.current.wind_speed}m/s <span style="display:inline-block; transform: rotate(${weatherData.current.wind_degree}deg)">&uarr;</span>
                </div>
                <div class="weather-widget-details-item">
                    <h4>Humidity</h4>
                    ${weatherData.current.humidity}%
                </div>
                <div class="weather-widget-details-item">
                    <h4>Time</h4>
                    ${weatherData.current.observation_time}
                
                
                
            </div>
        `;

    }


    getWeatherData('New York')

})();