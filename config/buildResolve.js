import path from "path";

export function buildResolve() {
  return {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  };
}
