// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
  // Safety net: if anything is still hidden after 2.5s (slow load, observer edge case), force it visible.
  setTimeout(() => revealEls.forEach(el => el.classList.add('is-visible')), 2500);
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Treatments carousel (arrow buttons; finger/trackpad swipe works natively via CSS scroll-snap)
const treatTrack = document.getElementById('treatmentsTrack');
const treatPrev = document.getElementById('treatPrev');
const treatNext = document.getElementById('treatNext');
if (treatTrack && treatPrev && treatNext) {
  const step = () => {
    const tile = treatTrack.querySelector('.t-tile');
    if (!tile) return treatTrack.clientWidth;
    const style = getComputedStyle(treatTrack);
    const gap = parseFloat(style.columnGap || style.gap || '24');
    return tile.getBoundingClientRect().width + gap;
  };
  treatPrev.addEventListener('click', () => treatTrack.scrollBy({ left: -step(), behavior: 'smooth' }));
  treatNext.addEventListener('click', () => treatTrack.scrollBy({ left: step(), behavior: 'smooth' }));
}

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
