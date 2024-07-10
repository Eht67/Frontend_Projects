// getting header element
let header = document.querySelector('.header-area');

// making header sticky on scroll past a specific point
document.onscroll = () => {
    if (window.scrollY >= 900) {
        header.classList.add('header-area-scrolled');
    }
    else {
        header.classList.remove('header-area-scrolled');
    }
}

// selecting mobile menu components
let mobileMenuIcon = document.querySelector('#mobile-menu-icon');
let mobileMenuContent = document.querySelector('#mobile-menu-content');
let mobileMenuExpanded = false;

// toggling mobile menu by clicking mobile menu icon
mobileMenuIcon.addEventListener('click', () => {
    if (!mobileMenuExpanded) {
        mobileMenuContent.style.height = '43rem';
        mobileMenuIcon.classList.remove("fa-bars");
        mobileMenuIcon.classList.add("fa-close");
        mobileMenuExpanded = true;
    }

    else if (mobileMenuExpanded) {
        mobileMenuContent.style.height = 0;
        mobileMenuIcon.classList.remove("fa-close");
        mobileMenuIcon.classList.add("fa-bars");
        mobileMenuExpanded = false;
    }
})

// closing mobile menu when clicking on it
mobileMenuContent.addEventListener('click', () => {
    mobileMenuContent.style.height = 0;
    mobileMenuIcon.classList.remove("fa-close");
    mobileMenuIcon.classList.add("fa-bars");
    mobileMenuExpanded = false;
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