import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const releases = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/releases",
    }),
    schema: z.object({
        title: z.string(),
        releaseType: z.enum([
            "album",
            "single",
            "ep",
            "remix",
            "other",
            "unofficial"
        ]),
        date: z.date(),
        cover: z.string(),
        featured: z.boolean().default(false),
        description: z.string(),
        label: z.string().optional(),
        streaming: z.object({
            spotify: z.string().url().optional(),
            apple: z.string().url().optional(),
            youtube: z.string().url().optional(),
            soundcloud: z.string().url().optional(),
            vkmusic: z.string().url().optional(),
            yandexmusic: z.string().url().optional(),
            bandcamp: z.string().url().optional()
        }),
        genres: z.array(z.string()).default([])
    }),
});

const reflections = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/reflections",
    }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        cover: z.string(),
        featured: z.boolean().default(false),
        description: z.string(),
    }),
});

export const collections = {
    releases,
    reflections,
};