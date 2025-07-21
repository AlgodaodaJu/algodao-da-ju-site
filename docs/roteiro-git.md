## 1. Mapa de destino dos arquivos

| Origem | Destino | Observações |
|-------|---------|-------------|
| `Cardápio Algodao da Ju.jpg` | `assets/images/menu/cardapio-algodao-da-ju.jpg` | vira imagem do cardápio |
| Demais `*.jpg` de produtos | `assets/images/produtos/` | imagem individual |
| Vídeos `*.mp4` | `assets/videos/` | criar a pasta se não existir |
| Pastas `Hagrid-Family-Trial-License-#65883` e `Trial` | `fonts/Hagrid/` | manter `*.ttf`/`*.otf` |
| `index.html` do repositório **GitHub-Arquivos** | **Ignorar** | já existe no projeto |

Se a pasta `assets/images/produtos` já contiver imagens antigas, remova-as antes de mover as novas fotos para evitar conflitos.

---

## 2. Roteiro Git (máx. 8 linhas)

```bash
git clone git@github.com:seuusuario/algodao-da-ju-site.git && cd algodao-da-ju-site
git remote add arquivos https://github.com/AlgodaodaJu/GitHub-Arquivos.git
git fetch arquivos
git checkout arquivos/main -- . ':!index.html'
mkdir -p assets/images/menu assets/images/produtos assets/videos fonts/Hagrid
git mv "Cardápio Algodao da Ju.jpg" assets/images/menu/cardapio-algodao-da-ju.jpg
git mv *.jpg assets/images/produtos/ && git mv *.mp4 assets/videos/ && git mv Hagrid-Family-Trial-License-#65883 Trial fonts/Hagrid/
git add . && git commit -m "feat: importa imagens, vídeos e fontes" && git push origin main
```

---

## 3. Trechos prontos para colar

### 3.1 » style.css (início)

```css
@font-face {
  font-family: 'Hagrid';
  src: url('fonts/Hagrid/Hagrid.woff2') format('woff2'),
       url('fonts/Hagrid/Hagrid.woff') format('woff'),
       url('fonts/Hagrid/Hagrid.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.menu-img {
  max-width: 100%;
  height: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.grid img {
  width: 100%;
  display: block;
}

.grid figcaption {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}
```

### 3.2 » index.html

```html
<section id="cardapio">
  <img class="menu-img" src="assets/images/menu/cardapio-algodao-da-ju.jpg" alt="Cardápio Algodão da Ju">
</section>

<section id="produtos">
  <div class="grid">
    <figure>
      <img src="assets/images/produtos/exemplo.jpg" alt="Produto Exemplo">
      <figcaption>Produto Exemplo</figcaption>
    </figure>
  </div>
</section>
```

### 3.3 » (opcional) script.js

```javascript
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
```

---

## Checklist

- [ ] Pastas `assets/images/menu`, `assets/images/produtos`, `assets/videos` e `fonts/Hagrid` criadas.
- [ ] Imagens e vídeos movidos para os caminhos corretos.
- [ ] Fontes “Hagrid” funcionando via `@font-face`.
- [ ] Seções do cardápio e produtos linkadas no `index.html`.
- [ ] Deploy do projeto no GitHub Pages concluído.
