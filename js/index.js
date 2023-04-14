let menuButton = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');




menuButton.addEventListener('pointerdown', () => {
    let header = document.querySelector('.menu').parentNode;
    let menu = document.querySelector('.menu');

    if (menu.className === "menu") {
        menu.classList.add("menu_responsive");
        header.style = 'flex-wrap: wrap; flex-direction: column';
    } else {
        menu.className = "menu";
        header.style = '';
    }
});


