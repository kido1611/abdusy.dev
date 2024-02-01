import { defineStore } from "pinia";

export const useCounterStorageStore = defineStore("counterStorageStore", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
