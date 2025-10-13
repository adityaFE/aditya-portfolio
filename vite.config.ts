import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    themePlugin(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "netlify.toml"),
          dest: "." // copy to the root of dist
        }
      ]
    })
  ],
  server:{
    port:3000,
    proxy:{
      "/api": "http://127.0.0.1:5002"
    },
    open:true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
