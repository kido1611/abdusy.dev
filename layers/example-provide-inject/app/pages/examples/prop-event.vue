<template>
  <div>
    <h1>Page Prop Event</h1>
    <div class="divide-y divide-gray-400">
      <section>
        <h2>Parent</h2>
        <p>User: {{ user }}</p>
        <div class="flex flex-row items-center space-x-3">
          <button @click="login">Login</button>
          <button @click="logout">Logout</button>
        </div>
      </section>

      <PropEventChild :user="user" @login="login" @logout="logout" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from "./../../types";

const user = ref<User>();

function login() {
  user.value = {
    id: "user-id",
    name: "Muhammad Abdusy Syukur",
  };
}

function logout() {
  user.value = undefined;
}
</script>

<style></style>
