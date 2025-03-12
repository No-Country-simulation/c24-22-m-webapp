import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Usa la versión correcta del plugin

export default defineConfig({
  plugins: [react()],
  base: "/c24-22-m-webapp/", // Asegúrate de usar el nombre correcto del repositorio
});

