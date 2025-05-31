import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: "page",
      source: "blogs/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        created_at: z.date(),
      }),
    }),
  },
});
