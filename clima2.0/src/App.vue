<template>
  <div id="app">
    <header>
      
      <nav class="container flex flex-col center ">
        
        <router-link to="/home">Home</router-link>     |
        <router-link to="/menu">Menu</router-link>     |
        <router-link to="/Noticias">Noticias</router-link>     |
        <router-link to="/Agenda">Agenda</router-link>     |
      </nav>
    </header>

    
    <main>
   
      <router-view />
    </main>
  </div>
  
</template>

<script>

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  
});
</script>

