import { H3Event } from 'h3'
import { drizzle } from 'drizzle-orm/libsql'

import { createClient } from '@libsql/client'

export default (event?: H3Event) => {
  const runtimeConfig = useRuntimeConfig(event)

  const connection = createClient({
    url: runtimeConfig.tursoUrl,
    authToken: runtimeConfig.tursoAuthToken
  })

  return drizzle(connection)
}
