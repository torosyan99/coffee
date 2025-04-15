import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig((env) => {
  const { mode } = env;

  return {
    plugins: [react()],
    base:"/coffee/",
    css: {
      modules: {
        generateScopedName:
          mode === "development"
            ? "[name]__[local]___[hash:base64:5]"
            : "[hash:base64:8]",
      },
    },
    server: {
      port: 3000,
      open: true,
      watch: {
        usePolling: true,
      },
      proxy: {
        '/api': {
          target: 'http://109.73.197.17:8080',
          changeOrigin: true,
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
