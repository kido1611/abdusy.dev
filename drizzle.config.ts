import 'dotenv/config'
import type { Config } from 'drizzle-kit'
export default {
  schema: './db/schema.ts',
  out: './drizzle',
  driver: 'turso',
  dbCredentials: {
    url: process.env.NUXT_TURSO_URL ?? '',
    authToken: process.env.NUXT_TURSO_AUTH_TOKEN ?? ''
  }
} satisfies Config
