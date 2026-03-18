import type { StorybookConfig } from "@storybook/react-vite";

// When deployed to GitHub Pages the site lives at /PollyMorph/.
// STORYBOOK_BASE_URL is injected by the CI workflow; falls back to /
// for local development.
const base = process.env.STORYBOOK_BASE_URL ?? "/";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return { ...config, base };
  },
};

export default config;
