let numb = 0;
let numb_display = document.getElementsByTagName('p')[0];
numb_display.innerHTML = numb;

let reset_btn = document.getElementById('reset-btn');
let count_btn = document.getElementById('count-btn');
let reverse_btn = document.getElementById('reverse-btn');

const reset_func = () => {
    numb = 0;
    numb_display.innerHTML = numb;
}

const count_func = () => {
    numb++;
    numb_display.innerHTML = numb;
}

const reverse_func = () => {
    numb--;
    numb_display.innerHTML = numb;
}

reset_btn.addEventListener('click', reset_func);
count_btn.addEventListener('click', count_func);
reverse_btn.addEventListener('click', reverse_func);