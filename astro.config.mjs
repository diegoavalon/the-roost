// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--astro-font-sans",
      weights: [400, 600, 700],
      styles: ["normal"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Epilogue",
      cssVariable: "--astro-font-display",
      weights: [400, 900],
      styles: ["normal"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Lora",
      cssVariable: "--astro-font-serif",
      weights: [400],
      styles: ["italic"],
      fallbacks: ["ui-serif", "Georgia", "serif"],
    },
  ],
});
