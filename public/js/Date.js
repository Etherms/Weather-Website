function currentDate(){
    const date  = new Date();

    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });;
    let year = date.getFullYear();

    return `${month} ${day}, ${year}`
}

dateContainer.innerHTML = currentDate();
