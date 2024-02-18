import db from "~/utils/db";
import { logs } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const isLoggerEnabled = useRuntimeConfig().isLoggingEnabled;
  if (isLoggerEnabled) {
    const ip = getRequestIP(event, { xForwardedFor: true });

    await db(event)
      .insert(logs)
      .values({
        ipAddress: ip || "",
        path: event.path,
      });
  }
});
