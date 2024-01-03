
function currentDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString('default', {month: 'long'}); ;
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

dateContainer.innerHTML = currentDate();


function forecastDateString() {
  const DateValues = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = new Date();
  const todayIndex = currentDate.getDay();

  secondDayString.innerHTML = DateValues[(todayIndex + 1) % 7];
  thirdDayString.innerHTML = DateValues[(todayIndex + 2) % 7];
  fourthDayString.innerHTML = DateValues[(todayIndex + 3) % 7];
  fifthDayString.innerHTML = DateValues[(todayIndex + 4) % 7];
}
forecastDateString();
