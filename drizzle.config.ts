import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/db/schema.ts",
  out: "./server/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.NUXT_TURSO_URL ?? "",
    authToken: process.env.NUXT_TURSO_AUTH_TOKEN ?? "",
  },
});
