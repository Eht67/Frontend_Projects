// open and close menu and show/hide backdrop
let menu = document.querySelector('#menu');
let menuToggler = document.querySelector('#hamburger');
let backdrop = document.querySelector('#backdrop');
let logo = document.querySelectorAll('.logo')[0];
let isMenuOpen = false;

const toggleMenu = () => {
    if (!isMenuOpen) {
        menu.style.right = '0';
        backdrop.style.width = '100vw';
        menuToggler.classList.add('is-active');
        isMenuOpen = true;
    }

    else if (isMenuOpen) {
        menu.style.right = '-270px';
        backdrop.style.width = '0vw';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
}

const closeMenu = () => {
    if (isMenuOpen) {
        menu.style.right = '-270px';
        backdrop.style.width = '0vw';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
}

menuToggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
logo.addEventListener('click', closeMenu);
