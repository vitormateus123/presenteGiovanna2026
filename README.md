# Para Giovanna

Presente de aniversário feito com React e Vite, pensado primeiro para celular.

## Rodar localmente

```bash
npm install
npm run dev
```

## Construir

```bash
npm run build
```

A galeria reutiliza três fotos do presente anterior e os recados em vídeo de Laura e Bia. O vídeo da Laura é servido diretamente pelo repositório público original. As cinco perguntas, os textos e a ordem das partes ficam em `src/content.js`.

## Fluxo de navegação

Quiz (`#/`) → surpresa do bolo (`#/surpresa`) → partes em ordem (`#/parte/<id>`, cada uma com botão "Continuar") → sumário (`#/sumario`), de onde tudo pode ser revisitado. A ordem das partes é a do array `chapters` em `src/content.js`; para incluir uma parte nova, adicione um item ali e o componente correspondente em `BODY`, em `src/App.jsx`.

## GitHub Pages

Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como origem. O fluxo em `.github/workflows/pages.yml` gera o React com Vite e publica `dist/`. A configuração anterior de publicação diretamente da branch tenta servir JSX sem compilação.

## Álbum de figurinhas

As figurinhas extraídas das coleções ficam em `public/stickers/<tema>/`. O catálogo e os nomes dos temas estão em `src/stickers.json`; `src/stickers.js` monta os caminhos e escolhe as figurinhas decorativas usadas pelo site. A seção **Álbum de figurinhas** permite filtrar por tema e ampliar cada imagem.
