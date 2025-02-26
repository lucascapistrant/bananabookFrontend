<script setup>
import Button from './Button.vue';
</script>

<template>
  <div class="container">
    <Button type="primary" block >login</Button>
    <Button type="secondary" block >Register</Button>
  </div>
</template>

<style scoped>
.container {
    background: var(--color-container);
    padding: 3rem;
    border-radius: 30px;
    max-width: 300px;
    box-shadow: 4px 4px 4px #777;
}

Button:first-of-type {
    margin-bottom: 20px;
}
</style>