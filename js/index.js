// Menu
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

// Video

let videoBtn = document.querySelector('.video__overlay');
let video = document.querySelector('.video__player');

videoBtn.addEventListener('pointerdown', () => {
    video.play();
    videoBtn.classList.add('video__overlay_hidden');
})

video.addEventListener('pointerdown', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})

video.addEventListener('ended', videoHandler, false);

function videoHandler() {
    videoBtn.classList.remove('video__overlay_hidden');
}