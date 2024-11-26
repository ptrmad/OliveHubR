import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/OliveHub/", // Dodajemy ścieżkę bazową
  build: {
    outDir: "./dist", // upewniamy się, że pliki będą generowane w dist poza OliveHub
  },
});
