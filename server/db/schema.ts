import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const logs = sqliteTable('logs', {
  id: integer('id').primaryKey(),
  ipAddress: text('ip_address').notNull(),
  path: text('path').notNull(),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})

export type Log = typeof logs.$inferSelect
export type InsertLog = typeof logs.$inferInsert
