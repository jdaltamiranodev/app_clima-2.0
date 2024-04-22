<template>
    <div class="dailyCard">
     
     <!--  <img alt="Vue logo" src="../assets/logo.svg"> -->
    
        <DailyWeather msg=""/>
        
      
        
    </div>
   
  </template>
 
 <script>

import { defineComponent } from 'vue';
  // Importa el componente de noticias
  import DailyWeather from '@/components/DailyWeather.vue'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
 
  export default  defineComponent({
    components: {
      DailyWeather,
    }
  })

</script>
<style>
/* .dailyCard{
    border: solid 2px black;
} */
</style>