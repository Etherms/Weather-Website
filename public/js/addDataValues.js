function addCurrentWeatherValues(currentWeatherData){
    tempContainer.innerHTML = `${parseInt(currentWeatherData.main.temp)}`;
    cityContainer.innerHTML = `${currentWeatherData.name}`;

    feelsLike.innerHTML = `${currentWeatherData.main.feels_like}`;
    highLow.innerHTML = `${Math.ceil(currentWeatherData.main.temp_max)}℃ / ${Math.ceil(currentWeatherData.main.temp_min)}℃`;
    humidity.innerHTML = `${currentWeatherData.main.humidity}%`;
    pressure.innerHTML = `${currentWeatherData.main.pressure} atm`;
    windSpeed.innerHTML = `${currentWeatherData.wind.speed} km/h`;
    visibility.innerHTML = `${currentWeatherData.weather[0].description}`;
}

function changeCloudLayout (currentWeatherData){
    switch(currentWeatherData.weather[0].main){
        case 'Clear':
            mainCloudContainer.innerHTML = "partly_cloudy_day";
            root.style.setProperty('--backround-image', `url(../img/sunny-background.jfif)`);
            break;  

        case 'Rain':
            mainCloudContainer.innerHTML = "rainy";
            root.style.setProperty('--backround-image', `url(../img/raining-background.jpg)`);
            break;

        case 'Snow':
            mainCloudContainer.innerHTML = "cloudy_snowing";
            root.style.setProperty('--backround-image', `url(../img/snow-background.jpg)`);
            break;

        case 'Clouds':
            mainCloudContainer.innerHTML = "cloud";
            root.style.setProperty('--backround-image', `url(../img/cloudy-background.jpg)`);
            break;

        case 'Haze':
            mainCloudContainer.innerHTML = "foggy";
            root.style.setProperty('--backround-image', `url(../img/haze-background.jpg)`);
            break;
    }
};