export const useCounterStorageStore = defineStore("counterStorageStore", () => {
  const count = useLocalStorage("counter-storage", 0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return { count: count, doubleCount, increment, decrement };
});
