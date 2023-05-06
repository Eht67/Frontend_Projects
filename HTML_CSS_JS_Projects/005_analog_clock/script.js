// getting dom elements
let hour_hand = document.getElementById('hour-hand');
let minute_hand = document.getElementById('minute-hand');
let second_hand = document.getElementById('second-hand');

// clock logic
setInterval(() => {
    let date = new Date();
    let hour_time = date.getHours();
    let minute_time = date.getMinutes();
    let second_time = date.getSeconds();

    let hour_rotation = 30*hour_time + minute_time/2;
    let minute_rotation = 6*minute_time + second_time/10;
    let second_rotation = 6*second_time;

    hour_hand.style.transform = `rotate(${hour_rotation}deg)`;
    minute_hand.style.transform = `rotate(${minute_rotation}deg)`;
    second_hand.style.transform = `rotate(${second_rotation}deg)`;
}, 100);
