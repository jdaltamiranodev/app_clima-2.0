<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
      <nav>
        
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/Noticias">Noticias</router-link>
        <router-link to="/agenda">Agenda</router-link>
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

<style>
/* Estilos globales de la aplicación */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Estilos para el encabezado y la navegación */
header {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  text-decoration: underline;
}
</style>

