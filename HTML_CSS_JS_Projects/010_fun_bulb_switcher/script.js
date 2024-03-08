let bulbs = document.querySelectorAll('.bulb');
let allBulbsOnButton = document.querySelector('#on-all-btn');
let allBulbsOffButton = document.querySelector('#off-all-btn');

const bulbsOn = () => {
    for (let i = 0; i < bulbs.length; i++) {
        setTimeout(() => {
            bulbs[i].setAttribute('src', 'bulb-on.jpg');
        }, i * 20);
    }
}

const bulbsOff = () => {
    for (let i = 0; i < bulbs.length; i++) {
        setTimeout(() => {
            bulbs[i].setAttribute('src', 'bulb-off.jpg');
        }, i * 20);
    }
}

for (let i = 0; i < bulbs.length; i++) {
    bulbs[i].addEventListener('click', () => {
        let bulbState = bulbs[i].attributes.getNamedItem('src').value;
        if (bulbState === 'bulb-off.jpg') {
            bulbs[i].setAttribute('src', 'bulb-on.jpg');
        }
        if (bulbState === 'bulb-on.jpg') {
            bulbs[i].setAttribute('src', 'bulb-off.jpg');
        }
    });
}

allBulbsOnButton.addEventListener('click', bulbsOn);
allBulbsOffButton.addEventListener('click', bulbsOff);

