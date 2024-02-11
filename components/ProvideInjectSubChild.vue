<template>
  <section>
    <h2>SubChild</h2>

    <p>User: {{ user }}</p>
    <div class="flex flex-row items-center space-x-3">
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
      <button @click="change">Change</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ProvideInjectKey } from "@/symbols";

const { user, login, logout } = inject(ProvideInjectKey, {
  user: undefined,
  login: () => {},
  logout: () => {},
});

function change() {
  if (user && user.value) {
    user.value.name = user?.value?.name + "change";
  }
}
</script>

<style></style>
