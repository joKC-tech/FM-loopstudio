const menuBtn = document.querySelector('.c-header__menu-btn');
const menuIcon = document.querySelector('.c-header__open-close-icon')
const menu = document.querySelector('.l-collapsable-menu');

function handleMenuClick(){
    menu.classList.toggle('is-closed');
    if (!menu.classList.contains('is-closed')){
        menuBtn.setAttribute( 'aria-label', 'Close the menu');
        menuBtn.setAttribute( 'aria-expanded', 'true');
        menuIcon.src = './images/icon-close.svg';

    } else {
        menuBtn.setAttribute( 'aria-label', 'Opne the menu');
        menuBtn.setAttribute( 'aria-expanded', 'false');
        menuIcon.src = './images/icon-hamburger.svg';
    }
}

menuBtn.addEventListener('click', handleMenuClick)