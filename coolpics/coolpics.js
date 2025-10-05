const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    const currentDisplay = getComputedStyle(nav).display;
    if (currentDisplay === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

// Ensure nav shows correctly when resizing to large screens
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

