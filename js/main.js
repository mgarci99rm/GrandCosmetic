// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Email sign-up popup
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

if (popupOverlay) {
  const alreadyShown = sessionStorage.getItem('gcc_popup_shown');
  if (!alreadyShown) {
    setTimeout(() => {
      popupOverlay.classList.add('visible');
      sessionStorage.setItem('gcc_popup_shown', '1');
    }, 8000);
  }

  popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('visible');
  });
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('visible');
    }
  });
}
