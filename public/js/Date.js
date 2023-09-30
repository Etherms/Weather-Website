
function currentDate(){
    const date  = new Date();

    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });;
    let year = date.getFullYear();

    return `${month} ${day}, ${year}`
}

dateContainer.innerHTML = currentDate();


function forecastDateString(){

    const DateValues = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const currentDate = new Date();

    secondDayString.innerHTML = DateValues[currentDate.getDay() + 1];
    thirdDayString.innerHTML = DateValues[currentDate.getDay() + 2];
    fourthDayString.innerHTML = DateValues[currentDate.getDay() + 3];
    fifthDayString.innerHTML = DateValues[currentDate.getDay() + 4];
}
forecastDateString();