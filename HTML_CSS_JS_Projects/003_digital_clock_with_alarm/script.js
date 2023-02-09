let hours_display = document.getElementsByTagName('p')[0];
let minutes_display = document.getElementsByTagName('p')[1];
let seconds_display = document.getElementsByTagName('p')[2];

let audio;
setTimeout(() => {
    audio = new Audio('alarm.mp3');
}, 5000);

let hours;
let minutes;
let seconds;

const updateClock = () => {
    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hours_display.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutes_display.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    seconds_display.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
};

window.setInterval(updateClock, 100);

updateClock();

let alarm_btn = document.getElementById('alarm-btn');

let alarm_hours;
let alarm_minutes;

const set_alarm_func = () => {
    alarm_hours = prompt('Enter hours of alarm in 24 hours format.');
    alarm_minutes = prompt('Enter minutes of alarm.');

    alarm_hours = Number.parseInt(alarm_hours) || 0;
    alarm_minutes = Number.parseInt(alarm_minutes) || 0;

    let display_alarm_hours = alarm_hours < 10 ? `0${alarm_hours}` : alarm_hours;
    let display_alarm_minutes = alarm_minutes < 10 ? `0${alarm_minutes}` : alarm_minutes;

    alarm_btn.innerHTML = `${display_alarm_hours} : ${display_alarm_minutes}`
}

alarm_btn.addEventListener('click', set_alarm_func);

let interval;

const ring_alarm_func = () => {
    if (alarm_hours == hours && alarm_minutes == minutes) {
        audio.play();
        clearInterval(interval)
    }
}

interval = setInterval(ring_alarm_func, 100);