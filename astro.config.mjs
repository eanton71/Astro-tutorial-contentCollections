import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "eantondev.netlify.app",
  integrations: [preact()]
});