import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // відкриє браузер автоматично
  },
  resolve: {
    alias: {
      "@": "/src", // Відносний шлях до src
    },
  },
});
