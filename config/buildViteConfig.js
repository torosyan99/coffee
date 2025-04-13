import { buildPlugins } from "./buildPlugins";
import { buildServer } from "./buildServer";
import { buildResolve } from "./buildResolve";
import { buildCss } from "./buildCss";

export function buildViteConfig(options) {
  return {
    plugins: buildPlugins(),
    css: buildCss(options),
    server: buildServer(),
    
    resolve: buildResolve(),
  };
}
