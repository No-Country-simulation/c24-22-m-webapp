import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/c24-22-m-webapp/", // Asegúrate de poner el nombre del repositorio de GitHub
});
