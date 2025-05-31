import { desc, notInArray } from "drizzle-orm";

import db from "~/utils/db";
import { logs } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  const selectLogs = await db(event)
    .select()
    .from(logs)
    .where(notInArray(logs.ipAddress, ["103.127.136.3"]))
    .orderBy(desc(logs.createdAt))
    .limit(50);

  return {
    logs: selectLogs,
  };
});
