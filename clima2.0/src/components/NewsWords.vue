/* eslint-disable */

<template>
    <div class="news bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-3">
                    <div class="card">
                        <img
                            src="../assets/imagen1.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                El brillante futuro de la energía solar con la
                                nueva irradiación solar de 15 minutos.
                            </h5>
                            <p class="card-text">
                                Con el emocionante lanzamiento de una
                                actualización de nuestro servicio de predicción
                                de energía y irradiancia solar...
                            </p>
                            <a
                                href="https://openweather.co.uk/blog/post/bright-future-solar-new-15-minute-solar-irradiance-openweather"
                                class="btn btn-primary"
                                >Go somewhere</a
                            >
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="card">
                        <img
                            src="../assets/imagen2.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                El viaje de la primavera.
                            </h5>
                            <p class="card-text">
                                La llegada de la primavera, vista por muchos en
                                todo el mundo como un momento de esperanza,
                                abarca muchas áreas de nuestras vidas. Desde el
                                clima y la agricultura, hasta...
                            </p>
                            <a
                                href="https://openweather.co.uk/blog/post/travel-spring"
                                class="btn btn-primary"
                                >Go somewhere</a
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 my-3">
                    <div class="card">
                        <img
                            src="../assets/imagen3.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">El desafío.</h5>
                            <p class="card-text">
                                Con el objetivo de buscar un futuro más
                                sostenible, así como el bienestar social,
                                OpenWeather ha anunciado una emocionante
                                competición que proporciona a los...
                            </p>
                            <a
                                href="https://openweather.co.uk/blog/post/openweather-challenge"
                                class="btn btn-primary"
                                >Go somewhere</a
                            >
                        </div>
                    </div>
                </div>
                <div class="col-md-6 my-3">
                    <div class="card">
                        <img
                            src="../assets/imagen4.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                Bajo la lluvia y el sol, 170 años de la Met
                                Office.
                            </h5>
                            <p class="card-text">
                                Con el paso de los años, la predicción
                                meteorológica ha pasado de ser un arte basado en
                                el folclore y la intuición a una ...
                            </p>
                            <a
                                href="https://openweather.co.uk/blog/post/through-rain-and-shine-170-years-met-office"
                                class="btn btn-primary"
                                >Go somewhere</a
                            >
                        </div>
                    </div>
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

<style>
.news {
    background-color: #c0e1a5;
}
.card-title {
    color: #147cac;
}
.card-body {
    background-color: #fce890;
}
.btn {
    background-color: #588c94;
}
.card {
}
</style>
