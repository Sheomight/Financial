let offset = 0;
let card = document.querySelectorAll('.card');

function showNext(card, offset, length) {
    let width = card.closest('.slider').clientWidth;
    offset = offset + width;
    if (offset > width * length) {
        offset = 0;
    }

    card.style.marginLeft = -offset + 'px';
}

function showPrev(card, offset, length) {
    let width = card.closest('.slider').clientWidth;
    offset = offset - width;
    if (offset < 0) {
        offset = width * length;
    }

    card.style.marginLeft = -offset + 'px';
}

document.querySelector('.switchButtons__btn_next').addEventListener('pointerdown', () => {
    showNext(card, offset, card.length);
});

document.querySelector('.switchButtons__btn_prev').addEventListener('pointerdown', () => {
    showPrev(card, offset, card.length);
});

// Clients
let clientOffset = 0;
let clientCard = document.querySelectorAll('.clientCard');

document.querySelector('.testimoni__switchBtns').querySelector('.switchButtons__btn_next').addEventListener('pointerdown', () => {
    showNext(clientCard[0], clientOffset, clientCard.length);
});

document.querySelector('.testimoni__switchBtns').querySelector('.switchButtons__btn_prev').addEventListener('pointerdown', () => {
    showPrev(clientCard[0], clientOffset, clientCard.length);
});