import { defineCollection } from "astro:content";

import { glob, file } from "astro/loaders";

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
});

const jobs = defineCollection({
    loader: file("./src/data/jobs.json"),
    schema: z.object({
    id: z.number().int().positive(),
    jobTitle: z
        .string()
        .min(2, "Job title must have at least 2 characters")
        .max(100),
    company: z
        .string()
        .min(2, "Company name is required")
        .max(100),
    webSite: z
        .string()
        .optional(),
    companyDescription: z
        .string()
        .min(10, "Company description is too short")
        .max(500),
    startDate: z
        .string(),
    endDate: z
        .string()
    })

})

const info = defineCollection({
    loader: glob({ base: './src/content/info', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        skills: z.array(z.string())
    })
})

export const collections = { projects, contact, jobs, info }; 