function getLowestandHighestTemp(fiveDayTemp){
    var lowestValue = fiveDayTemp[0];
    var highestValue = fiveDayTemp[0];
    
    for (let i = 1; i < fiveDayTemp.length; i++) {
      const current = fiveDayTemp[i];
      if (current < lowestValue) {
        lowestValue = current;
      }
      if (current > highestValue) {
        highestValue = current;
      }
    }
    return [lowestValue, highestValue];

}

function addTempRange(lowestValue, highestValue, fiveDayTemp){
    let lowest = lowestValue - 10;
    let highest = highestValue + 10;


    for( let i =0; i<fiveDayTemp.length; i++){
        var percentage = ((fiveDayTemp[i] - lowest) / (highest - lowest)) * 100 
        switch(i){
            case 0:
                root.style.setProperty('--today-progress', `${percentage}%`);
                break;
                ;
            case 1:
                root.style.setProperty('--second-day-progress', `${percentage}%`);
                break;
                ;
            case 2:
                root.style.setProperty('--third-day-progress', `${percentage}%`);
                break;
                ;
            case 3:
                root.style.setProperty('--fourth-day-progress', `${percentage}%`);
                break;
                ;
            case 4:
                root.style.setProperty('--fifth-day-progress', `${percentage}%`);
                break;
                ;
        } 
    }

}


function addForecastValues(forecastData){
    const fiveDayTemp = [];
    for (let i = 0; i < forecastData.list.length; i += 8) {
        fiveDayTemp.push(forecastData.list[i].main.temp);
        switch(i){
            case 0:
                firstDaytemp.innerHTML = forecastData.list[i].main.temp
                break;
            case 8:
                secondDaytemp.innerHTML = forecastData.list[i].main.temp
                break;
            case 16:
                thirdDaytemp.innerHTML = forecastData.list[i].main.temp
                break;
            case 24:
                fourthDaytemp.innerHTML = forecastData.list[i].main.temp
                break;
            case 32:
                fifthDaytemp.innerHTML = forecastData.list[i].main.temp
                break;
        };
    }
    let lowAndHighValue =getLowestandHighestTemp(fiveDayTemp)
    
    const lowValue = lowAndHighValue[0];
    const highestValue = lowAndHighValue[1];

    addTempRange(lowValue, highestValue, fiveDayTemp);
    
}

