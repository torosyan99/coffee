export function buildCss({ mode }) {
  return {
    modules: {
      generateScopedName:
        mode === "development"
          ? "[name]__[local]___[hash:base64:5]"
          : "[hash:base64։8]",
    },
  };
}
