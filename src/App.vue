<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from './components/Button.vue';
</script>

<template>
  <router-link :to="`/login`">
    <Button color="primary">Login Page</Button>
  </router-link>
  <RouterView />
</template>

<style scoped>

</style>
