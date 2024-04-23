import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeClima from './views/HomeClima.vue';

import NoticiasWords from './views/NoticiasWords.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DailyWeather from './components/DailyWeather.vue';




const routes = [
  { path: '/', component: HomeClima },
  { path: '/Noticias', component: NoticiasWords },
  { path: '/agenda', component: DailyWeather },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');


