import { defineConfig } from "astro/config";
// import bootstrap from '@types/bootstrap';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["@types/bootstrap"],
    },
  },
  site: "https://melyhc.github.io",
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
        silenceDeprecations: [
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "import",
        ],
      },
    },
  },
});
