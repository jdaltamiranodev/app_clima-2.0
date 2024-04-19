<template>
    <div class="dailyCard">
    <h2>{{msg}}</h2>
        <div class="SingleDayCard" >
            <div class="rightNow">
              <h2 v-if="weatherData && weatherData.name">{{ weatherData.name}}</h2>

               <!--  <h2 v-if="weatherData && weatherData.name">{{ Math.floor(weatherData.name)}}</h2> -->
                <p v-if="weatherData && weatherData.main">Temperatura: {{ weatherData.main.temp }}°C</p>
                <p v-if="weatherData && weatherData.weather && weatherData.weather[0]">Descripción: {{ weatherData.weather[0].description }}</p>
            </div>
            <div class="note">
                <img alt="" src="../assets/pen.svg" >
                <textarea name="" id="notes" cols="30" rows="10" placeholder="escribe aquí tu tarea"></textarea>
            </div>
            <div class="advice">
                <img alt="" src="../assets/idea.svg" >
                <textarea name="" id="" cols="30" rows="10">aquí te doy un consejo teniendo en cuenta el clima</textarea>
               
           </div>
        </div>
    </div>

</template>

<script> 
import { defineComponent,ref, onMounted } from 'vue'; 
import axios from 'axios';

export default defineComponent({
  name: 'DailyWeather',
  setup() {
    const weatherData = ref(null);
    const apiKey = '8f5a97309913a1742cefe19e754e0110';



   // Método para obtener los datos del clima
   const getWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`);
        weatherData.value = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
      }
    };

    // Llamar al método cuando el componente se monta
    onMounted(() => {
      getWeatherData();
    });

    return { weatherData };
  },
});
</script>

<style >
.dailyCard{ border: solid 2px black; background-color: #d9d9d9 ;


}

</style>
