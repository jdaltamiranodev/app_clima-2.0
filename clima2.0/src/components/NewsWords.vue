<!-- News.vue -->
<template>
  <div class="news">
    <h2 v-if="weatherData && weatherData.name">Condiciones meteorológicas actuales en {{ weatherData.name }}</h2>
    <p v-if="weatherData && weatherData.main">Temperatura: {{ weatherData.main.temp }}°C</p>
    <p v-if="weatherData && weatherData.weather && weatherData.weather[0]">Descripción: {{ weatherData.weather[0].description }}</p>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'NewsWords',
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

