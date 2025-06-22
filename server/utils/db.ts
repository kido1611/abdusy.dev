import type { H3Event } from "h3";
import { drizzle } from "drizzle-orm/libsql";

import { createClient } from "@libsql/client";

export const db = (event: H3Event) => {
  const runtimeConfig = useRuntimeConfig(event);

  const connection = createClient({
    url: runtimeConfig.tursoUrl,
    authToken: runtimeConfig.tursoAuthToken,
  });

  return drizzle(connection);
};
