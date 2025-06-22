<template>
  <section>
    <h2>SubChild</h2>

    <p>User: {{ prop.user }}</p>
    <div class="flex flex-row items-center space-x-3">
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { User } from "../types";

const prop = defineProps<{
  user?: User;
}>();

const emit = defineEmits<{
  login: [];
  logout: [];
}>();

function login() {
  emit("login");
}

function logout() {
  emit("logout");
}
</script>

<style></style>
