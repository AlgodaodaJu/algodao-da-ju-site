function switchLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('lang') || 'pt';
  switchLang(stored);
});
