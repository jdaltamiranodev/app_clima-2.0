import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeClima.vue';
import Menu from './views/MenuClima.vue';
import NoticiasWords from './views/NoticiasWords.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/Noticias', component: NoticiasWords },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
