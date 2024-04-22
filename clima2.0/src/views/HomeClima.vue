<template>
    <div class="app">
      <div class="header container h-100 p-5">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar w-50 mx-2">
            <input
              type="text"
              class="input form-control"
              v-model="city"
              placeholder="Busca tu ciudad"
            />
          </div>
          <button
            class="btn-search btn btn-primary"
            @click="searchWeather"
          >
            Buscar <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <br />
      <div v-if="showWeather">
        <Weather :city="city" :coordinates="coordinates" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Weather from '../components/Weather.vue';
  
  const city = ref('');
  const showWeather = ref(false);
  const coordinates = ref(null);
  
  const searchWeather = async () => {
    // Simulamos la búsqueda de las coordenadas de la ciudad
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Mostramos el clima después de la búsqueda
    showWeather.value = true;
  };
  </script>
  
<style scoped>
body {
    background-color: #121212 !important;
}

.header {
    background-color: #212730;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 5rem;
}
.btn-search {
    background-image: linear-gradient(to right, cyan, magenta);
}
</style>
