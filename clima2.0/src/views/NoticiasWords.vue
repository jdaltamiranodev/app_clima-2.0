<!-- noticia.vue -->
<template>
    <div>
      <h1>Noticia</h1>
      <NewsWords />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  // Importa el componente de noticias
  import NewsWords from '@/components/NewsWords.vue'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
  
  export default  defineComponent({
    components: {
      NewsWords,
    }
  })

  
  </script>
  
  <style scoped>
  /* Estilos específicos de la vista */
  </style>
  