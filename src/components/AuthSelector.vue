<script setup>
import Button from './Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectAuthOption = (option) => {
  router.push({ name: 'login', query: { type: option } })
}

</script>

<template>
  <div class="container">
    <Button color="primary" block @click="selectAuthOption('login')" >login</Button>
    <Button color="secondary" block @click="selectAuthOption('register')" >Register</Button>
  </div>
</template>

<style scoped>
.container {
    background: var(--color-container);
    padding: 3rem;
    border-radius: 30px;
    max-width: 300px;
    width: 100%;
    box-shadow: 4px 4px 4px #777;
}

Button:first-of-type {
  margin-bottom: 2rem;
}

</style>