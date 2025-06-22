import { defineStore, skipHydrate } from "pinia";

export const useCounterStore = defineStore("counterStore", () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return { count: count, doubleCount, increment, decrement };
});
