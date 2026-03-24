import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from 'astro/zod';

const projects = defineCollection({
    loader: file("./src/data/projects.json"),
    schema: ({image}) => z.object({
        id: z.string(),
        title: z.string(),
        poster: image(),
        tech: z.array(z.string()),
        role: z.string(),
        description: z.string(),
        github: z.string().optional(),
        client: z.string(),
        website: z.string(),
        date: z.string()
    })
});

const contact = defineCollection({
    loader: file("./src/data/contact.json"),
    schema: ({image}) => z.object({
        id: z.string(),
        name: z.string(),
        icon: image(),
        link: z.string()
    })
})

export const collections = { projects, contact }; 