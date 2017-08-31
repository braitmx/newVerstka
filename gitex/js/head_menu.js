let touch_menu = document.querySelector(".header__touch-menu"),
    header_menu = document.querySelector(".header__menu");

touch_menu.addEventListener('click', () => header_menu.classList.toggle('active'));