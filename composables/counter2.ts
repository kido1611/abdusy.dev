export const useCounter = () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }
  return {
    count,
    doubleCount,
    increment,
    decrement
  }
}
