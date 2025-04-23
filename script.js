function switchLang(lang) {
  document.body.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
  });
}
document.addEventListener('DOMContentLoaded', () => switchLang('pt'));
