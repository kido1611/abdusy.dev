import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const name = getRouterParam(event, 'name')

  return {
    name: name,
    message: 'Hello Hydration, ' + name,
  }
})
