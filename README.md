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
