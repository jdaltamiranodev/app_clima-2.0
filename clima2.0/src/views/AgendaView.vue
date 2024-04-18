<template>
    <div class="dailyCard">
      <img alt="Vue logo" src="../assets/windylogo.svg">
    
      
   
        <DailyWeather msg=" daily"/>
        <div>
            <h2>{{ new Date().toLocaleDateString('es',{
            weekday:'long',
            year: 'numeric',
            month: 'long',
            day:'numeric'})}}</h2>
        </div>
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
/* 
import DailyWeather from '@/components/DailyWeather.vue'

export default{
    name: 'AgendaView',
    components: {Dailyweather,
  }
} */
</script>
<style>
.dailyCard{
    border: solid 2px black;
}
</style>