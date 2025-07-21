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

  document.querySelectorAll('.summary-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const namePart = item.querySelector('.item-name').textContent;
      const pricePart = item.querySelector('.price').textContent;
      const price = pricePart.replace('R$ ', '').replace(',', '.');
      window.location.href = `produto.html?name=${encodeURIComponent(namePart)}&price=${encodeURIComponent(price)}`;
    });
  });
});
function scrollSummary(dir) {
  const carousel = document.getElementById('summary-carousel');
  if (!carousel) return;
  const cardWidth = carousel.querySelector('.summary-item').offsetWidth + 16;
  carousel.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
}

if (typeof module !== 'undefined') {
  module.exports = { switchLang };
}
const produtos = [
  'bolo-laranja.jpg',
  'brigadeiro-gourmet.jpg',
  'cookie-redvelvet.jpg'
];

const grid = document.querySelector('#produtos .grid');

produtos.forEach(nome => {
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  img.src = 'assets/images/produtos/' + nome;
  img.alt = nome.replace(/[-.]/g, ' ');
  const cap = document.createElement('figcaption');
  cap.textContent = img.alt;
  fig.appendChild(img);
  fig.appendChild(cap);
  grid.appendChild(fig);
});
