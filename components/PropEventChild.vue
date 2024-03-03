<template>
  <div class="divide-y divide-gray-400">
    <section>
      <h2>Child</h2>

      <p>User: {{ prop.user }}</p>
    </section>

    <PropEventSubChild :user="prop.user" @login="login" @logout="logout" />
  </div>
</template>

<script lang="ts" setup>
import type { User } from '~/types'
const prop = defineProps<{
  user?: User
}>()

const emit = defineEmits<{
  login: []
  logout: []
}>()

function login() {
  emit('login')
}

function logout() {
  emit('logout')
}
</script>

<style></style>
