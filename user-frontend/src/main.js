import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Login from './views/Login.vue';
import Register from './views/Register.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');