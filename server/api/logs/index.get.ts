import { desc } from "drizzle-orm";

import db from "~/utils/db";
import { logs } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const selectLogs = await db(event)
    .select()
    .from(logs)
    .orderBy(desc(logs.createdAt))
    .limit(50);

  return {
    logs: selectLogs,
  };
});
