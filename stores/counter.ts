import { defineStore, skipHydrate } from "pinia";

export const useCounterStore = defineStore("counterStore", () => {
  const count = useLocalStorage("counter-local-store", 0);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return { count: skipHydrate(count), doubleCount, increment, decrement };
});
