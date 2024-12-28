import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	// add yur domain name here
	site: "https://meej.ca",
	compressHTML: true,
	integrations: [sitemap()],
});

