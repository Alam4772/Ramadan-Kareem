import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "Ramadan 2026",
        short_name: "Ramadan 2026",
        description: "Ramadan 2026",
        theme_color: "#000",
        icons: [
          {
            src: "/icon-192x192.jpg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icon-512x512.jpg",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
