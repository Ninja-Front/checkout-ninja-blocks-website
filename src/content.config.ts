import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const features = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/features" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["block-category", "rule", "capability"]),
    badge: z.string().optional(),
    icon: z.string().optional(),
    mockupElements: z.array(z.object({
      label: z.string(),
      width: z.string(),
    })).optional(),
    mockupLabel: z.string().optional(),
    mockupType: z.enum(["warning", "success", "info"]).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

const templates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/templates" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = { features, templates };
