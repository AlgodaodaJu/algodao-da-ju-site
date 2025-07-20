function parseQuery() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get('name') || '',
    price: params.get('price') || '',
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const { name, price } = parseQuery();
  const imgSeed = name.toLowerCase().replace(/\W+/g, '-');
  document.getElementById('prod-name').textContent = name;
  document.getElementById('prod-img').src = `https://picsum.photos/seed/${imgSeed}/400/400`;
  document.getElementById('prod-price').textContent = `R$ ${price}`;
  document.getElementById('pay-link').href = `https://bolecode.com/pagar?item=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
});
