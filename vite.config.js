import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  esbuild: { jsx: "automatic" },
  root: resolve(projectRoot, "src"),
  base: "./",
  publicDir: resolve(projectRoot, "public"),
  build: {
    outDir: resolve(projectRoot, "dist"),
    emptyOutDir: true,
  },
});
