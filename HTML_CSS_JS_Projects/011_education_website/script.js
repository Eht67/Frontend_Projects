let header = document.querySelector('.header-area');

document.onscroll = () => {
if (window.scrollY >= 900){
    header.classList.add('header-area-scrolled');
}

else{
    header.classList.remove('header-area-scrolled');
}
}