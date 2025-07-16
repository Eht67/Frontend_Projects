let menu = document.querySelector('#menu');
let menuToggler = document.querySelector('#hamburger');
let backdrop = document.querySelector('#backdrop');
let header = document.querySelectorAll('.header')[0];
let logo = document.querySelectorAll('.logo')[0];
let isMenuOpen = false;

const toggleMenu = () => {
    if (!isMenuOpen) {
        menu.style.right = '0';
        backdrop.style.width = '100vw';
        menuToggler.style.transform = 'translateX(var(--menu-toggler-distane))';
        menuToggler.classList.add('is-active');
        isMenuOpen = true;
    }

    else if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform = 'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
}

const closeMenu = () => {
    if (isMenuOpen) {
        menu.style.right = '-180px';
        backdrop.style.width = '0vw';
        menuToggler.style.transform = 'translateX(0)';
        menuToggler.classList.remove('is-active');
        isMenuOpen = false;
    }
}

menuToggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
logo.addEventListener('click', closeMenu);

window.addEventListener('scroll', () => {
    if (scrollY >= 644) {
        header.classList.add('scrolled');
    }

    else {
        header.classList.remove('scrolled');
    }
})

let carousels = document.querySelectorAll('.carousel');

for (let i = 0; i < carousels.length; i++) {
    let carousel = carousels[i];
    let left_btn = carousel.querySelectorAll('.left-button')[0];
    let right_btn = carousel.querySelectorAll('.right-button')[0];
    let carousel_inner = carousel.querySelectorAll('.carousel-inner')[0];
    let carousel_item_width = carousel_inner.querySelectorAll('.carousel-item')[0].offsetWidth;

    carousel.addEventListener('mouseover', () => {
        document.addEventListener('keydown', handleKeyboardKeys);
    });

    carousel.addEventListener('mouseout', () => {
        document.removeEventListener('keydown', handleKeyboardKeys);
    });

    function handleKeyboardKeys(event) {
        const keyCode = event.keyCode;
        if (keyCode === 37) {
            carousel_inner.scrollLeft = carousel_inner.scrollLeft - carousel_item_width;
        }
        else if (keyCode === 39) {
            carousel_inner.scrollLeft = carousel_inner.scrollLeft + carousel_item_width;
        }
    }

    left_btn.addEventListener('click', () => {
        carousel_inner.scrollLeft = carousel_inner.scrollLeft - carousel_item_width;
    })

    right_btn.addEventListener('click', () => {
        carousel_inner.scrollLeft = carousel_inner.scrollLeft + carousel_item_width;
    })

    if (carousel_inner.scrollLeft === 0) {
        left_btn.classList.add('disabled');
    }

    carousel_inner.addEventListener('scroll', () => {
        if (carousel_inner.scrollLeft === 0) {
            left_btn.classList.add('disabled');
        }

        if (carousel_inner.scrollLeft > 0 && carousel_inner.scrollLeft < (carousel_inner.scrollWidth - carousel_inner.offsetWidth)) {
            left_btn.classList.remove('disabled');
            right_btn.classList.remove('disabled');
        }

        if (carousel_inner.scrollLeft === carousel_inner.scrollWidth - carousel_inner.offsetWidth) {
            right_btn.classList.add('disabled');
        }
    })
}