export const useUrlstate = (key: string, defaultValue: string = '', isReplace: boolean = true) => {
  const router = useRouter()
  const route = useRoute()

  const currentValue = route.query[key]?.toString()

  const state = ref<string>(currentValue ?? defaultValue)

  watch(state, (current) => {
    const currentQuery = { ...route.query }
    currentQuery[key] = current

    router.push({
      path: route.path,
      query: currentQuery,
      replace: isReplace
    })
  })

  return state
}
