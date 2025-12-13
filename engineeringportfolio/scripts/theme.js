
function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('theme-dark')) {
        body.classList.remove('theme-dark');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
    }
    
    updateThemeButton();
}


function updateThemeButton() {
    const button = document.getElementById('theme-toggle');
    const isDark = document.body.classList.contains('theme-dark');
    
    if (button) {

        if (isDark) {
            button.textContent = '';
            button.setAttribute('aria-label', 'Toggle light mode');
        } else {
            button.textContent = '';
            button.setAttribute('aria-label', 'Toggle dark mode');
        }
    }
}


function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('theme-dark');
    } else {
        document.body.classList.remove('theme-dark');
    }
    
    updateThemeButton();
}

function initTheme() {
    
    loadSavedTheme();
    
   
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}