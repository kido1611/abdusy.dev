import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: "page",
      source: "articles/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        is_published: z.boolean(),
        tags: z.array(z.string()),
        created_at: z.date(),
      }),
    }),
  },
});
