document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));
// Shared, accessible disclosure behaviour for project cards.
// The height transition is optional; keyboard users and reduced-motion settings work without it.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function toggleDisclosure(button) {
  const panel = document.getElementById(button.dataset.target);
  if (!panel) return;
  const opening = button.getAttribute('aria-expanded') !== 'true';
  panel.getAnimations().forEach(animation => animation.cancel());
  const initialHeight = panel.hidden ? 0 : panel.getBoundingClientRect().height;
  panel.hidden = false;
  const targetHeight = opening ? panel.scrollHeight : 0;
  button.setAttribute('aria-expanded', String(opening));
  const language = document.documentElement.lang;
  button.innerHTML = opening
    ? (language === 'de' ? 'Details schließen' : 'Close details') + ' <span aria-hidden="true">↑</span>'
    : button.dataset.closedLabel;
  if (reducedMotion.matches || !panel.animate) {
    panel.hidden = !opening;
    return;
  }
  panel.style.overflow = 'hidden';
  const animation = panel.animate([
    {height: initialHeight + 'px', opacity: opening ? 0 : 1},
    {height: targetHeight + 'px', opacity: opening ? 1 : 0}
  ], {duration: 280, easing: 'cubic-bezier(.2,.75,.24,1)'});
  animation.onfinish = () => {
    panel.hidden = !opening;
    panel.style.overflow = '';
  };
}
document.querySelectorAll('.expand-button').forEach(button => {
  button.dataset.closedLabel = button.innerHTML;
  button.addEventListener('click', () => toggleDisclosure(button));
});
const closeMenu = () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
};

document.querySelector('.site-header').addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
      entry.target.classList.add('entering');
      observer.unobserve(entry.target);
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.section-heading, .project-visual, .career-role, .education-record')
    .forEach(element => observer.observe(element));
}


// Keep the same section when switching languages from an anchor link.
document.querySelectorAll('.language-switch a').forEach(link => {
  link.addEventListener('click', () => {
    link.hash = window.location.hash;
  });
});
