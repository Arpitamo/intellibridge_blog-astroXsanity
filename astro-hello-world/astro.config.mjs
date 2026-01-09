import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [// 👇 update these lines
  sanity({
    projectId: "bql2xbpk",
    dataset: "production",
    useCdn: false, // for static builds
  }), tunnel()],
});