<template>
  <div>
    <CustomInput v-model="firstName" label="Nama Depan" />
    <CustomInput v-model="lastName" label="Nama Belakang" />
  </div>
</template>

<script lang="ts" setup>
const firstName = defineModel("firstName");
const lastName = defineModel("lastName");
</script>

<style></style>
