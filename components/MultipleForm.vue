<template>
  <div>
    <CustomInput v-model="firstName" label="Nama Depan" />
    <CustomInput v-model="lastName" label="Nama Belakang" />
  </div>
</template>

<script lang="ts" setup>
const firstName = defineModel<string>('firstName')
const lastName = defineModel<string>('lastName')
</script>

<style></style>
