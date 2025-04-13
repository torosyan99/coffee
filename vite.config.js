import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig((env) => {
  const { mode } = env;

  return {
    plugins: [react()],
    css: {
      modules: {
        generateScopedName:
          mode === "development"
            ? "[name]__[local]___[hash:base64:5]"
            : "[hash:base64։8]",
      },
    },
    server: {
      port: 3000,
      open: true,
      watch: {
        usePolling: true,
      },
      proxy: {
        "/api": {
          target: "http://server:8000",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
     
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
