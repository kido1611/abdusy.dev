<template>
  <div>
    <p>
      Minim sint tempor consectetur et occaecat ad nostrud consectetur duis enim anim proident
      consectetur. Eiusmod fugiat occaecat ea tempor dolore magna duis do consequat occaecat.
      Aliquip eu aliqua quis quis ea cupidatat aliquip nulla eu dolore proident. Duis laborum
      proident exercitation incididunt.
    </p>

    <div class="*:block mt-6">
      <CustomInput
        v-model="value"
        label="Judul"
      />
      <p>Value: {{ value }}</p>
    </div>
    <div class="*:block mt-6">
      <CustomInputOld
        v-model="value"
        label="Nama Depan Old"
      />
      <p>Value: {{ value }}</p>
    </div>
    <div class="*:block mt-6">
      <MultipleForm
        v-model:last-name="value"
        v-model:first-name="firstName"
      />
      <p>First Name: {{ firstName }}</p>
      <p>Last Name: {{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const value = ref('Contoh value')
const firstName = ref('--nama depan--')
</script>

<style></style>
