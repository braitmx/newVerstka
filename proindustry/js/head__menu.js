let touch_menu = document.querySelector(".touch-menu"),
    menu = document.querySelector(".menu");

touch_menu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
});