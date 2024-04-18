<!-- News.vue -->
<template>
  <div class="news">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
// Importa reactive para crear datos reactivos
/* import { reactive } from 'vue'; */

// Define los datos reactivos del componente
/*const state = reactive({
  title: 'Título de la noticia',
  content: 'Contenido de la noticia...'
});*/

/* export default {
  name: 'NewsWords',
  props: { title: 'Título de la noticia',
  content: 'Contenido de la noticia...'
    
  }
} */

const title = "Título de la notici"
const content = "Contenido de la noticia..."
</script>

<style scoped>

.news { }
  
</style>
