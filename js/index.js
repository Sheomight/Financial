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

// Slider

let offset = 0;
let card = document.querySelector('.card');


let next = document.querySelector('.switchButtons__btn_next');
let prev = document.querySelector('.switchButtons__btn_prev');

next.addEventListener('pointerdown', () => {
    let width = document.querySelector(".ourServices__cards").clientWidth;
    offset = offset + width;
    if (offset > width * 2) {
        offset = 0;
    }

    card.style.marginLeft = -offset + 'px';
});

prev.addEventListener('pointerdown', () => {
    let width = document.querySelector(".ourServices__cards").clientWidth;
    offset = offset - width;
    if (offset < 0) {
        offset = width * 2;
    }

    card.style.marginLeft = -offset + 'px';
});

// Feature title
function setFeatureTitle() {
    let featureTitle = document.querySelector('.keyFeature').querySelector('.information__title');
    if (window.innerWidth < 768) {
        featureTitle.textContent = 'Financial Planning For Safe Investment';
    } else {
        featureTitle.textContent = 'Manage Your Finances From one Place';
    }
}
setFeatureTitle();
window.addEventListener('resize', setFeatureTitle);


// Blog cards

let blogCards = document.querySelectorAll('.newsCard');

function hideBlogCards(cards) {
    let counter = Math.floor(document.querySelector('.ourBlog__news').clientWidth / document.querySelector('.newsCard').clientWidth);

    if (counter == 0) return;

    for (counter; counter < cards.length; counter++) {
        cards[counter].classList.add('newsCard_hidden');
    }
}

function showBlogCards(cards) {
    let counter = Math.floor(document.querySelector('.ourBlog__news').clientWidth / document.querySelector('.newsCard').clientWidth) - 1;

    if (counter == 0) {
        return;
    } else if (counter > cards.length) counter = cards.length;

    for (counter; counter > 0; counter--) {
        cards[counter].classList.remove('newsCard_hidden');
    }
}


hideBlogCards(blogCards);
window.addEventListener('resize', () => showBlogCards(blogCards));
window.addEventListener('resize', () => hideBlogCards(blogCards));
