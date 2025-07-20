# algodao-da-ju-site

Site oficial do Algodão da Ju com páginas independentes para cardápio, pagamento e contato. Todas as páginas suportam três idiomas e exibem imagens ilustrativas dos produtos.

## Fontes locais

Coloque os arquivos da família **Hagrid** (ou outras fontes) na pasta `fonts/hagrid`.
Os arquivos devem ter os nomes:
- `HagridTextHeavy.woff2`, `HagridTextHeavy.woff` ou `HagridTextHeavy.ttf`
- `CodecPro.woff2`, `CodecPro.woff` ou `CodecPro.ttf`
- `CodecProExtraBold.woff2`, `CodecProExtraBold.woff` ou `CodecProExtraBold.ttf`

Esses arquivos não estão inclusos no repositório por questões de licença. Copie-os manualmente para que as fontes carreguem corretamente.

## Testando a fonte Hagrid

Adicionamos a página `hagrid-test.html` para visualizar a família de fontes **Hagrid**.
Abra o arquivo em um navegador e confira o texto exibido com a fonte carregada de [Zetafonts](https://www.zetafonts.com/hagrid).

## Executando testes

Instale as dependências do projeto e rode os testes automatizados com:

```bash
npm install
npm test
```
