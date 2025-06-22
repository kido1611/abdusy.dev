export default defineEventHandler(async () => {
  await new Promise(r => setTimeout(r, 4000))

  const result = await $fetch('https://jsonplaceholder.typicode.com/posts')

  return {
    ts: new Date(),
    result: result,
  }
})
