import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(defaultConfig) {
    return mergeConfig(defaultConfig, {
      base: '/react-ecosistema-unp/',
      build: {
        outDir: resolve(__dirname, '.storybook-build'),
        emptyOutDir: true,
        rollupOptions: {
          external: ['react', 'react-dom']
        }
      }
    })
  }
};
export default config;
