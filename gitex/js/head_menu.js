let touch_menu = document.querySelector(".header__touch-menu"),
    menu = document.querySelector(".header__menu");

touch_menu.addEventListener('click', () => menu.classList.toggle('active'));