async function fetchWeatherData(cityInput) {
    if (cityInput === '') {
        console.error('City input is empty');
        return Promise.reject('City input is empty');
    }

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
            throw new Error(`Weather API response was not ok (${response.status})`);
        }
        const currentWeatherData = await response.json();
        console.log('Current Weather Data:', currentWeatherData);


        tempContainer.innerHTML = `${parseInt(currentWeatherData.main.temp)}`;
        cityContainer.innerHTML = `${currentWeatherData.name}`;

        feelsLike.innerHTML = `${currentWeatherData.main.feels_like}`;


        highLow.innerHTML = `${Math.ceil(currentWeatherData.main.temp_max)}℃ / ${Math.ceil(currentWeatherData.main.temp_min)}℃`;
        humidity.innerHTML = `${currentWeatherData.main.humidity}%`;
        pressure.innerHTML = `${currentWeatherData.main.pressure}pb`;
        windSpeed.innerHTML = `${currentWeatherData.wind.speed}km/h`;
        visibility.innerHTML = `${currentWeatherData.weather[0].description}`;
        


        const response_1 = await fetch(forecastURL);
        if (!response_1.ok) {
            throw new Error(`Forecast API response was not ok (${response_1.status})`);
        }
        const forecastData = await response_1.json();
        for (let i = 0; i < forecastData.list.length; i += 8) {
            console.log(forecastData.list[i]);
        }
    } catch (error) {
        alert(error);
    }
}

searchButton.addEventListener('click', () => {
    const cityInput = document.querySelector('input.city-input').value;
    cityContainer.innerHTML = cityInput;
    
    fetchWeatherData(cityInput);
});















