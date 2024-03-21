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

let mobileMenuIcon = document.querySelector('#mobile-menu-icon');
let mobileMenuContent = document.querySelector('#mobile-menu-content');
let mobileMenuExpanded = false;


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

mobileMenuContent.addEventListener('click', () => {
    mobileMenuContent.style.height = 0;
    mobileMenuIcon.classList.remove("fa-close");
    mobileMenuIcon.classList.add("fa-bars");
    mobileMenuExpanded = false;
})