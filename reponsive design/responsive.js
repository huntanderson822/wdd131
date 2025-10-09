
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');


  function setInitialState() {
    if (window.innerWidth >= 700) {
      nav.classList.remove('hide');
      menuBtn.classList.remove('change');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.add('hide');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }
  setInitialState();


  menuBtn.addEventListener('click', () => {
    const isHidden = nav.classList.toggle('hide');
    menuBtn.classList.toggle('change');
    menuBtn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
  });

  nav.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', () => {
      if (window.innerWidth < 700) {
        nav.classList.add('hide');
        menuBtn.classList.remove('change');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
      nav.classList.remove('hide');
      menuBtn.classList.remove('change');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.add('hide');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
