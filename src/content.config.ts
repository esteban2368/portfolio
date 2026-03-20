import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from 'astro/zod';

const projects = defineCollection({
    loader: file("./src/data/projects.json"),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        tech: z.array(z.string()),
        role: z.string(),
        description: z.string(),
        github: z.string().optional(),
        client: z.string(),
        website: z.string(),
        date: z.string()
    })
})

export const collections = { projects }; 