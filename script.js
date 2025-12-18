const burgerButton = document.getElementById('burgerButton');
const mobileOverlay = document.getElementById('mobileOverlay');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
});
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (mobileOverlay.classList.contains('active')) return;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hidden');
    }

    else {
        header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
});

function scrollToCenter(container, child) {
    const containerCenter = container.clientWidth / 2;
    const childCenter =
        child.offsetLeft + child.offsetWidth / 2;

    container.scrollTo({
        left: childCenter - containerCenter,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.doing__container');
    const blocks = document.querySelectorAll('.doing__block');

    const btnLeft = document.querySelector('.doing__button-left');
    const btnRight = document.querySelector('.doing__button-right');

    let currentIndex = 1;

    scrollToCenter(container, blocks[currentIndex]);

    btnLeft.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        scrollToCenter(container, blocks[currentIndex]);
    });

    btnRight.addEventListener('click', () => {
        currentIndex = Math.min(blocks.length - 1, currentIndex + 1);
        scrollToCenter(container, blocks[currentIndex]);
    });
});

