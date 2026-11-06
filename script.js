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
// Shared, accessible disclosure behaviour for project cards and career roles.
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
  if (button.classList.contains('expand-button')) {
    button.innerHTML = opening ? 'Close details <span aria-hidden="true">↑</span>' : 'Read the case study <span aria-hidden="true">↗</span>';
  }
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
document.querySelectorAll('.expand-button, .career-toggle').forEach(button => {
  button.addEventListener('click', () => toggleDisclosure(button));
});