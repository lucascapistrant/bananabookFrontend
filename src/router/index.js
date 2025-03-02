import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GreetView from '@/views/Greet.vue';
import LoginView from '@/views/Login.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/greet',
      name: 'greet',
      component: GreetView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
