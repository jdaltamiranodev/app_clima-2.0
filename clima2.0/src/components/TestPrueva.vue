<template>
    <div class="news">
        <!--    <h2 v-if="weatherData && weatherData.name">Condiciones meteorológicas actuales en {{ weatherData.name }}</h2>
      <p v-if="weatherData && weatherData.main">Temperatura: {{ weatherData.main.temp }}°C</p>
      <p v-if="weatherData && weatherData.weather && weatherData.weather[0]">Descripción: {{ weatherData.weather[0].description }}</p> -->
        <div class="card1" style="width: 18rem">
            <img src="../assets/image.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a
                    href="https://elpais.com/espana/catalunya/2024-04-19/cataluna-vuelve-a-cambiar-de-rumbo-frente-a-la-sequia-de-agua-con-barcos-a-una-desaladora-portatil-en-el-mar-de-barcelona.html"
                    class="btn btn-primary"
                    >Go somewhere</a
                >
            </div>
        </div>
        <div class="card2" style="width: 18rem">
            <img src="../assets/image.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a
                    href="https://elpais.com/espana/catalunya/2024-04-19/cataluna-vuelve-a-cambiar-de-rumbo-frente-a-la-sequia-de-agua-con-barcos-a-una-desaladora-portatil-en-el-mar-de-barcelona.html"
                    class="btn btn-primary"
                    >Go somewhere</a
                >
            </div>
            <div class="card3" style="width: 18rem">
                <img src="../assets/image.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a
                        href="https://elpais.com/espana/catalunya/2024-04-19/cataluna-vuelve-a-cambiar-de-rumbo-frente-a-la-sequia-de-agua-con-barcos-a-una-desaladora-portatil-en-el-mar-de-barcelona.html"
                        class="btn btn-primary"
                        >Go somewhere</a
                    >
                </div>
            </div>
            <div class="card4" style="width: 18rem">
                <img src="../assets/image.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a
                        href="https://elpais.com/espana/catalunya/2024-04-19/cataluna-vuelve-a-cambiar-de-rumbo-frente-a-la-sequia-de-agua-con-barcos-a-una-desaladora-portatil-en-el-mar-de-barcelona.html"
                        class="btn btn-primary"
                        >Go somewhere</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const weatherData = ref(null);
const apiKey = '8f5a97309913a1742cefe19e754e0110';

// Método para obtener los datos del clima
const getWeatherData = async () => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`,
        );
        weatherData.value = response.data;
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
    }
};

// Llamar al método cuando el componente se monta
onMounted(() => {
    getWeatherData();
});
</script>

<style></style>
