let hours_display = document.getElementsByTagName('p')[0];
let minutes_display = document.getElementsByTagName('p')[1];
let seconds_display = document.getElementsByTagName('p')[2];


const updateClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours_display.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutes_display.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    seconds_display.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
};

window.setInterval(updateClock, 100);

updateClock();