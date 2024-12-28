import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
	loader: glob({ pattern: "**/**.md", base: "./src/data/project" }),
});

export const collections = { project };
