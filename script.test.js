const { switchLang } = require('./script');

describe('switchLang', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-lang="pt" id="pt">PT</div>
      <div data-lang="en" id="en">EN</div>
      <div data-lang="es" id="es">ES</div>
    `;
    localStorage.clear();
  });

  test('switch to en shows only en elements', () => {
    switchLang('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.getElementById('en').style.display).toBe('');
    expect(document.getElementById('pt').style.display).toBe('none');
    expect(document.getElementById('es').style.display).toBe('none');
    expect(localStorage.getItem('lang')).toBe('en');
  });
});
