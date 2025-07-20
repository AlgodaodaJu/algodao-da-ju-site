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

  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(ua) || /iPad|iPhone|iPod/.test(ua)) {
    document.body.classList.add('mobile');
  }
});
