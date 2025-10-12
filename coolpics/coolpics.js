const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.image-viewer');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('hide');
});

function handleResize() {
    if (window.innerWidth >= 1000) {
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const src = clickedImg.getAttribute('src');
    const alt = clickedImg.getAttribute('alt');
    const fullSrc = src.split('-')[0] + '-full.jpeg';

    modalImg.setAttribute('src', fullSrc);
    modalImg.setAttribute('alt', alt);
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
