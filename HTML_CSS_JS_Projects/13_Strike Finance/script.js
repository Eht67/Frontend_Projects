let menuIcon = document.querySelector('.menu-icon');
let navList = document.querySelector('.navlist');
let isMenuOpen = false;

function toggleMenu() {
    if (!isMenuOpen) {
        menuIcon.classList.add('is-active');
        navList.classList.add('is-opened');
        isMenuOpen = true;
    }

    else if (isMenuOpen) {
        menuIcon.classList.remove('is-active');
        navList.classList.remove('is-opened');
        isMenuOpen = false;
    }
}

menuIcon.addEventListener('click', toggleMenu);
navList.addEventListener('click', toggleMenu);

let lightCard = document.querySelector('.derivatives-card.card-light')

window.addEventListener('scroll', () => {
    if (scrollY >= 1300) {
        if (lightCard.classList.contains('hidden')) {
            lightCard.classList.remove('hidden');
        }
    }
})

let carousels = document.querySelectorAll('.carousel');

for (let i = 0; i < carousels.length; i++) {
    let carousel = carousels[i];
    let left_btn = carousel.querySelectorAll('.btn-left')[0];
    let right_btn = carousel.querySelectorAll('.btn-right')[0];
    let carousel_inner = carousel.querySelectorAll('.carousel-inner')[0];
    let carousel_width = carousel_inner.offsetWidth;

    carousel.addEventListener('mouseover', () => {
        document.addEventListener('keydown', handleKeyboardKeys);
    });

    carousel.addEventListener('mouseout', () => {
        document.removeEventListener('keydown', handleKeyboardKeys);
    });

    function handleKeyboardKeys(event) {
        const keyCode = event.keyCode;
        if (keyCode === 37) {
            carousel_inner.scrollLeft = carousel_inner.scrollLeft - carousel_width;
        }
        else if (keyCode === 39) {
            carousel_inner.scrollLeft = carousel_inner.scrollLeft + carousel_width;
        }
    }

    left_btn.addEventListener('click', () => {
        carousel_inner.scrollLeft = carousel_inner.scrollLeft - carousel_width;
    })

    right_btn.addEventListener('click', () => {
        carousel_inner.scrollLeft = carousel_inner.scrollLeft + carousel_width;
    })
}

let faqs = document.querySelectorAll('.faq');

for (let i = 0; i < faqs.length; i++) {
    let faq = faqs[i];
    let answer = faq.querySelector('.answer');

    if (faq.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        faq.classList.add('active');
        answer.style.marginTop = "20px";
    }
    else {
        answer.style.maxHeight = "0px";
        answer.style.marginTop = "0px";
        faq.classList.remove('active');
    }

    faq.addEventListener('click', () => {
        if (faq.classList.contains('active')) {
            answer.style.maxHeight = "0px";
            answer.style.marginTop = "0px";
            faq.classList.remove('active');
        }
        else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            faq.classList.add('active');
            answer.style.marginTop = "20px";
        }
    })
}

function getCurrentRotation(el) {
    let st = window.getComputedStyle(el, null);
    let tm = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "none";
    if (tm != "none") {
        var values = tm.split('(')[1].split(')')[0].split(',');
        var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
        return (angle < 0 ? angle + 360 : angle);
    }
    return 0;
}

let externalContent1Top = document.querySelector('.external-content.n1').querySelector('.top');
let externalContent1Bottom = document.querySelector('.external-content.n1').querySelector('.bottom');

let externalContent2Top = document.querySelector('.external-content.n2').querySelector('.top');
let externalContent2Bottom = document.querySelector('.external-content.n2').querySelector('.bottom');

let externalContent3Top = document.querySelector('.external-content.n3').querySelector('.top');
let externalContent3Bottom = document.querySelector('.external-content.n3').querySelector('.bottom');

let externalContent4Top = document.querySelector('.external-content.n4').querySelector('.top');
let externalContent4Bottom = document.querySelector('.external-content.n4').querySelector('.bottom');

let externalContent5Top = document.querySelector('.external-content.n5').querySelector('.top');
let externalContent5Bottom = document.querySelector('.external-content.n5').querySelector('.bottom');

function addGlow(ContentNum) {
    if (ContentNum === 1) {
        externalContent1Top.classList.add('glowing');
        externalContent1Bottom.classList.add('glowing');

        externalContent2Top.classList.remove('glowing');
        externalContent2Bottom.classList.remove('glowing');

        externalContent3Top.classList.remove('glowing');
        externalContent3Bottom.classList.remove('glowing');

        externalContent4Top.classList.remove('glowing');
        externalContent4Bottom.classList.remove('glowing');

        externalContent5Top.classList.remove('glowing');
        externalContent5Bottom.classList.remove('glowing');
    }
    else if (ContentNum === 2) {
        externalContent2Top.classList.add('glowing');
        externalContent2Bottom.classList.add('glowing');

        externalContent1Top.classList.remove('glowing');
        externalContent1Bottom.classList.remove('glowing');

        externalContent3Top.classList.remove('glowing');
        externalContent3Bottom.classList.remove('glowing');

        externalContent4Top.classList.remove('glowing');
        externalContent4Bottom.classList.remove('glowing');

        externalContent5Top.classList.remove('glowing');
        externalContent5Bottom.classList.remove('glowing');
    }
    else if (ContentNum === 3) {
        externalContent3Top.classList.add('glowing');
        externalContent3Bottom.classList.add('glowing');

        externalContent1Top.classList.remove('glowing');
        externalContent1Bottom.classList.remove('glowing');

        externalContent2Top.classList.remove('glowing');
        externalContent2Bottom.classList.remove('glowing');
        
        externalContent4Top.classList.remove('glowing');
        externalContent4Bottom.classList.remove('glowing');

        externalContent5Top.classList.remove('glowing');
        externalContent5Bottom.classList.remove('glowing');
    }
    else if (ContentNum === 4) {
        externalContent4Top.classList.add('glowing');
        externalContent4Bottom.classList.add('glowing');

        externalContent1Top.classList.remove('glowing');
        externalContent1Bottom.classList.remove('glowing');
        
        externalContent2Top.classList.remove('glowing');
        externalContent2Bottom.classList.remove('glowing');

        externalContent3Top.classList.remove('glowing');
        externalContent3Bottom.classList.remove('glowing');

        externalContent5Top.classList.remove('glowing');
        externalContent5Bottom.classList.remove('glowing');
    }
    else if (ContentNum === 5) {
        externalContent5Top.classList.add('glowing');
        externalContent5Bottom.classList.add('glowing');

        externalContent1Top.classList.remove('glowing');
        externalContent1Bottom.classList.remove('glowing');
        
        externalContent2Top.classList.remove('glowing');
        externalContent2Bottom.classList.remove('glowing');

        externalContent3Top.classList.remove('glowing');
        externalContent3Bottom.classList.remove('glowing');

        externalContent4Top.classList.remove('glowing');
        externalContent4Bottom.classList.remove('glowing');
    }
}

addGlow(1);

setInterval(() => {
    let viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let dotAngle = getCurrentRotation(document.querySelector('.dot'));

    if (viewPortWidth > 1300) {
        if (dotAngle == 50 + 5) {
            addGlow(2);
        }
        if (dotAngle == 130 + 5) {
            addGlow(3);
        }
        if (dotAngle == 190 + 5) {
            addGlow(4);
        }
        if (dotAngle == 270 + 5) {
            addGlow(5);
        }
        if (dotAngle == 350 + 5) {
            addGlow(1);
        }
    }

    if (viewPortWidth <= 1300 && viewPortWidth > 400) {
        if (dotAngle == 45 - 5) {
            addGlow(2);
        }
        if (dotAngle == 28 - 5) {
            addGlow(3);
        }

        if (dotAngle == 360 - 5) {
            addGlow(4);
        }

        if (dotAngle == 335 - 5) {
            addGlow(5);
        }

        if (dotAngle == 314 - 5) {
            addGlow(1);
        }
    }

    if (viewPortWidth <= 400) {
        if (dotAngle == 37 - 5) {
            addGlow(2);
        }
        if (dotAngle == 20 - 5) {
            addGlow(3);
        }

        if (dotAngle == 360 - 5) {
            addGlow(4);
        }

        if (dotAngle == 340 - 5) {
            addGlow(5);
        }

        if (dotAngle == 325 - 5) {
            addGlow(1);
        }
    }
}, 10);