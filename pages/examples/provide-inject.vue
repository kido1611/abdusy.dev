<template>
  <div>
    <h1>Page Provide Inject</h1>
    <div class="divide-y divide-gray-400">
      <section>
        <h2>Parent</h2>
        <p>User: {{ user }}</p>
        <div class="flex flex-row items-center space-x-3">
          <button @click="login">Login</button>
          <button @click="logout">Logout</button>
        </div>
      </section>
      <ProvideInjectChild />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User, UserInject } from "~/types";
import { ProvideInjectKey } from "@/symbols";

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

provide(ProvideInjectKey, {
  user: user,
  login: login,
  logout: logout,
});
</script>

<style></style>
