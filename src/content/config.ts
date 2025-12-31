import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    eventDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    projectUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};