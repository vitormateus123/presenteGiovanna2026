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

A galeria reutiliza três fotos do presente anterior e os recados em vídeo de Laura e Bia. O vídeo da Laura é servido diretamente pelo repositório público original. As cinco perguntas são provisórias e podem ser ajustadas em `src/main.jsx`.

## GitHub Pages

Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como origem. O fluxo em `.github/workflows/pages.yml` gera o React com Vite e publica `dist/`. A configuração anterior de publicação diretamente da branch tenta servir JSX sem compilação.

## Stickers

Os recortes do ZIP estão em `public/stickers/`, em WebP. `sources.json` registra o arquivo original e as coordenadas dos recortes das coleções. Os fundos externos foram removidos preservando o interior das figuras; memes com fotografia mantêm seu fundo.

Edite `src/stickers.js` para escolher as colagens de cada tema e seção. O componente `Sticker` também aparece na abertura, no quiz e no envelope. São imagens decorativas, sem foco ou captura de cliques, com carregamento sob demanda abaixo da abertura. Os tamanhos e a distribuição no celular ficam no bloco final de `src/styles.css`.
