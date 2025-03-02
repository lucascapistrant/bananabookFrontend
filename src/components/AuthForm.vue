<script setup>
import Button from './Button.vue';
import { defineProps, ref } from 'vue';

const props = defineProps({
    authType: String,
})

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  errorMessage.value = "";
  
  try {
    const response = await fetch("https://banana-book-backend.vercel.app/api/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json"},
      body: JSON.stringify({ username: username.value, password: password.value }),
      credentials: "include"
    })

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login Failed");
    }

    console.log(data.message);

  } catch(err) {
      errorMessage.value = err.message;
  }
}

const register = async () => {
  errorMessage.value = "";

  try {
    const response = await fetch("https://banana-book-backend.vercel.app/api/auth/register", {
      method: "POST",
      headers: { "Content-type": "application/json"},
      body: JSON.stringify({ username: username.value, password: password.value }),
      credentials: "include"
    })

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration Failed");
    }

    console.log(data.message);
    login()

  } catch(err) {
      errorMessage.value = err.message;
  }
}

const formAction = () => {
  if (props.authType == 'login') {
    login();
  } else {
    register();
  }
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="formAction" >
      <input type="text" placeholder="username" v-model="username" required>
      <input type="password" placeholder="password" v-model="password" required>
      <p v-if="errorMessage" class="error" >{{ errorMessage }}</p>
      <Button color="secondary" type="submit" class="submit">Let's Go!</Button>
    </form>
  </div>
</template>

<style scoped>
.container {
    background: var(--color-container);
    padding: 20px 30px;
    border-radius: 30px;
    max-width: 300px;
    width: 100%;
    box-shadow: 4px 4px 4px #777;
}

input {
    width: 100%;
    margin: 10px;
    color: var(--color-background);
  outline: none;
  /* border: 2px solid var(--color-accent); */
  border: none;
  background: var(--color-accent);
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 15px;
  text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.submit {
    width: fit-content;
    margin: 10px;
}

.error {
    font-size: 1.5rem;
    color: red;
}

</style>