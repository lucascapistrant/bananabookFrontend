<script setup>
import BananaBackground from '@/components/BananaBackground.vue';
import AuthSelector from '@/components/AuthSelector.vue';
</script>

<template>
<BananaBackground />
<div class="content">
    <h1>Welcome to BananaBook!</h1>
    <AuthSelector class="auth"/>
</div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    position: relative;
}

h1 {
    margin: 0;
    padding: 0;
    top: 10%;
    text-align: center;
    position: absolute;
}

.auth {
    margin: auto 0;
}
</style> 