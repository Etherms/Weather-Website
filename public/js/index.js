const apiKey = 'b4f14acde9128b8d3aa7f19726393199';
const searchButton = document.querySelector('.citySearch-button');

const tempContainer = document.getElementById("temperature");
const cityContainer = document.getElementById("location");
const timeContainer = document.getElementById("time");
const dateContainer = document.getElementById("date");
const cloudContainer = document.getElementById("cloud-icon");


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















