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
  if (panel.getAnimations) panel.getAnimations().forEach(animation => animation.cancel());
  const initialHeight = panel.hidden ? 0 : panel.getBoundingClientRect().height;
  panel.hidden = false;
  const targetHeight = opening ? panel.scrollHeight : 0;
  button.setAttribute('aria-expanded', String(opening));
  const language = document.documentElement.lang;
  button.innerHTML = opening
    ? (language === 'de' ? 'Details schließen' : language === 'hr' ? 'Zatvori detalje' : 'Close details') + ' <span aria-hidden="true"><svg class="cta-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V3m-4 4 4-4 4 4"/></svg></span>'
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

/* Compact first view, all original evidence remains in the DOM and available without JS. */
(() => {
  const main = document.querySelector('main');
  if (!main) return;
  const buttons = Array.from(document.querySelectorAll('.expand-button'));
  for (const button of buttons) {
    const panel = document.getElementById(button.dataset.target || '');
    if (!panel || !button.dataset.closedLabel) continue;
    panel.hidden = true;
    button.setAttribute('aria-expanded','false');
  }
  const revealAnchor = () => {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const panel = target.closest('.case-detail[hidden]');
    if (panel) {
      const button = buttons.find(b => b.dataset.target === panel.id);
      if (button) {
        button.click();
        requestAnimationFrame(() => target.scrollIntoView({block:'start'}));
      }
    }
    for (let el = target; el && el !== main; el = el.parentElement) {
      if (el.tagName === 'DETAILS') el.open = true;
    }
  };
  revealAnchor();
  window.addEventListener('hashchange', revealAnchor);
  if (reducedMotion.matches) return;
  const progress = document.createElement('div');
  progress.className = 'pf-progress';
  progress.setAttribute('aria-hidden','true');
  const fill = document.createElement('span');
  progress.appendChild(fill);
  document.body.appendChild(progress);
  let queued = false;
  const sync = () => {
    queued = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
    fill.style.transform = 'scaleX(' + fraction + ')';
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(sync); } };
  window.addEventListener('scroll', queue, {passive:true});
  window.addEventListener('resize', queue, {passive:true});
  document.addEventListener('toggle', queue, true);
  if ('ResizeObserver' in window) new ResizeObserver(queue).observe(main);
  queue();
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches || entry.target.closest('[hidden]')) continue;
      entry.target.animate([{opacity:.72,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{
        duration:520,delay:Number(entry.target.dataset.pfDelay || 0),easing:'cubic-bezier(.2,.75,.25,1)'
      });
    }
  },{threshold:.08,rootMargin:'0px 0px -12px 0px'});
  const selectors='.hero-copy,.hero-portrait,.project-content,.rd-additional-card,.sys-node,.career-body,.education-intro,.principle,.background-aside';
  main.querySelectorAll(selectors).forEach((el,i) => {
    el.dataset.pfDelay=String((i%4)*45);
    observer.observe(el);
  });
  if (typeof reducedMotion.addEventListener === 'function') reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) { observer.disconnect(); progress.remove(); if (main.getAnimations) main.getAnimations({subtree:true}).forEach(a=>a.cancel()); }
  });
})();
