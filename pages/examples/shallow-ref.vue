<template>
  <div>
    <h1>shallowRef</h1>
    <p>Counter Ref: {{ counter }}</p>
    <p>Counter shallowRef: {{ shallowCounter }}</p>

    <p>Counter 2 Ref: {{ counter2.count }}</p>
    <p>Counter 2 shallowRef: {{ shallowCounter2.count }}</p>

    <div class="border-y border-gray-300 flex flex-wrap gap-4 py-4">
      <button
        class="px-3 py-2 rounded-md bg-sky-200 text-sky-800"
        type="button"
        @click="counter++"
      >
        Increase Counter Ref
      </button>
      <button
        type="button"
        @click="shallowCounter++"
        class="px-3 py-2 rounded-md bg-sky-200 text-sky-800"
      >
        Increase Counter shallowRef
      </button>

      <button
        type="button"
        @click="counter2.count++"
        class="px-3 py-2 rounded-md bg-sky-200 text-sky-800"
      >
        Increase Counter 2 Ref
      </button>

      <button
        type="button"
        @click="shallowCounter2.count++"
        class="px-3 py-2 rounded-md bg-sky-200 text-sky-800"
      >
        Increase Counter 2 shallowRef
      </button>
    </div>

    <h2>Problem</h2>
    <p>
      When increasing Counter 2 shallowRef, the value is increased, but the view
      not updated. It's because the button only update the count value, not the
      whole ref value.
    </p>
    <p>To update the view, other button must be pressed.</p>

    <h2>Solve</h2>
    <div class="border-y border-gray-300 flex flex-wrap gap-4 py-4">
      <button
        type="button"
        @click="increaseShallowCounter"
        class="px-3 py-2 rounded-md bg-sky-200 text-sky-800"
      >
        Increase Counter 2 shallowRef
      </button>
      <button
        type="button"
        @click="increaseShallowCounter2"
        class="px-3 py-2 rounded-md bg-sky-200 text-sky-800"
      >
        Increase Counter 2 shallowRef v2
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const counter = ref(0);
const shallowCounter = shallowRef(0);

const counter2 = ref({ count: 0 });
const shallowCounter2 = shallowRef({ count: 0 });

function increaseShallowCounter() {
  shallowCounter2.value.count++;
  triggerRef(shallowCounter2);
}

function increaseShallowCounter2() {
  shallowCounter2.value = {
    count: shallowCounter2.value.count + 1,
  };
}
</script>

<style></style>
