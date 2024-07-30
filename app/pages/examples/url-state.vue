<template>
  <div>
    <h1>URL Query as State</h1>
    <section>
      <h2>Visible</h2>
      <p>State: {{ visibleState }}</p>
      <button @click="changeVisible">
        Change
      </button>
    </section>
    <section>
      <h2>Filter</h2>
      <p>State: {{ filterState }}</p>
      <button @click="changeFilter">
        Change
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
const visibleState = useUrlstate('visible', '')
const filterState = useUrlstate('filter', 'name')

function changeVisible() {
  visibleState.value = visibleState.value == 'true' ? 'false' : 'true'
}

function changeFilter() {
  filterState.value = filterState.value == 'name' ? 'email' : 'name'
}
</script>

<style></style>
