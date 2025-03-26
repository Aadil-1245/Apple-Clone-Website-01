import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Apple-Clone-Website-01/", // Required for GitHub Pages
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react"
    })
  ],
  build: {
    sourcemap: true
  }
});
