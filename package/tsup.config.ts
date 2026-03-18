import { defineConfig } from "tsup";
import { copyFileSync, mkdirSync } from "fs";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    tokens: "src/tokens.ts",
    rules: "src/rules.ts",
    icons: "src/icons.ts",
    "react-icons": "src/svg-icons/index.tsx",
    svg: "src/svg-icons/raw.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  async onSuccess() {
    // Copy font files into dist
    mkdirSync("dist/fonts", { recursive: true });
    copyFileSync("assets/fonts/PDS-Icon-Font-20.woff2", "dist/fonts/PDS-Icon-Font-20.woff2");
    copyFileSync("assets/fonts/PDS-Icon-Font-20.ttf",   "dist/fonts/PDS-Icon-Font-20.ttf");
    // Copy CSS files
    copyFileSync("src/pds-icons.css", "dist/pds-icons.css");
    copyFileSync("dist_css_pollymorph.css", "dist/pollymorph.css");
    console.log("Font files and CSS copied to dist/");
  },
});
