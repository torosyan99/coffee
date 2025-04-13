import react from "@vitejs/plugin-react";
import path from "path";
import svgSpritePlug from "vite-plugin-svg-sprite";
export function buildPlugins() {
  return [
    react(),
    svgSpritePlug({
      symbolId: "icon-[name]",
      include: [path.resolve(__dirname, "src", "app", "assets", "**/*.svg")],
    }),
  ];
}
