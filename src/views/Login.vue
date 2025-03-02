<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import BananaBackground from '@/components/BananaBackground.vue';
import AuthForm from '@/components/AuthForm.vue';

const route = useRoute();
const authType = computed(() => route.query.type || 'login')
 
</script>

<template>
<BananaBackground />
<div class="content">
    <h1 v-if="authType == 'login'">Login</h1>
    <h1 v-if="authType == 'register'">Register</h1>
    <AuthForm :authType="authType" class="auth" />
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