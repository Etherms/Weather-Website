async function fetchWeatherData(cityInput) {
  if (cityInput === '') {
    console.error('City input is empty');
    return Promise.reject('City input is empty');
  }
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) {
      throw new Error(`Weather API response was not ok (${response.status})`);
    }
    const currentWeatherData = await response.json();
    cityContainer.innerHTML = cityInput;
    return currentWeatherData;
  } catch (error) {
    alert(error);
  }
}

async function fetchForecastData(cityInput) {
  if (cityInput === '') {
    console.error('City input is empty');
    return Promise.reject('City input is empty');
  }
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(forecastURL);
    if (!response.ok) {
      throw new Error(`Weather API response was not ok (${response.status})`);
    }
    return forecastData = await response.json();
  } catch (error) {
    alert(error);
  }
}


searchButton.addEventListener('click', () => {
  const cityInput = document.querySelector('input.city-input').value;

  fetchWeatherData(cityInput).then((currentWeather) => {
    // console.log(currentWeather);
    addCurrentWeatherValues(currentWeather);
    changeCloudLayout(currentWeather);
  }).catch((error) => {
    console.error(error);
  });


  fetchForecastData(cityInput).then((forecastFuture) =>{
    addForecastValues(forecastFuture);
  })
      .catch((error) => {
        console.error(error);
      });
});

const newCityInput = document.getElementById('city-input');

newCityInput.addEventListener('keypress', function(event) {
  // Check if the pressed key is the Enter key (key code 13)
  if (event.keyCode === 13) {
    const cityInput = document.querySelector('input.city-input').value;

    fetchWeatherData(cityInput).then((currentWeather) => {
      // console.log(currentWeather);
      addCurrentWeatherValues(currentWeather);
      changeCloudLayout(currentWeather);
    }).catch((error) => {
      console.error(error);
    });


    fetchForecastData(cityInput).then((forecastFuture) =>{
      addForecastValues(forecastFuture);
    })
        .catch((error) => {
          console.error(error);
        });
  }
});


