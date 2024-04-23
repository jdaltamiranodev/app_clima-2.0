<template>
  <div class="dailyCard">
    <h2>{{ msg }}</h2>
    <div class="SingleDayCard">
      <div class="rightNow">
        <h2 v-if="weatherData && weatherData.name">{{ weatherData.name }}</h2>

        <!--  <h2 v-if="weatherData && weatherData.name">{{ Math.floor(weatherData.name)}}</h2> -->
        <p v-if="weatherData && weatherData.main">Temperatura {{ Math.round(weatherData.main.temp) }}°C</p>
        <p v-if="weatherData && weatherData.main">Mínimo {{ Math.round(weatherData.main.temp_min) }}°C</p>
        <p v-if="weatherData && weatherData.main">Máxima{{ Math.round(weatherData.main.temp_max) }}°C</p>
      </div>

       <div class="note" id="note_Container">
        <img alt="" src="../assets/pen.svg">
        <textarea v-model="todo" id="note" cols="30" rows="10" placeholder="escribe aquí tu tarea">
        </textarea>
        <button @click="guardar">guardar</button>
      </div>
      
      <div class="advice" id="advice_container">
        <img alt="" src="../assets/idea.svg">
        <textarea v-if="mostrarConsejo" v-model="idea" id="idea" cols="30" rows="10" placeholder="escribe aquí tus planes"></textarea>
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
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bilbao&appid=${apiKey}&units=metric`);
    weatherData.value = response.data;
  } catch (error) {
    console.error('Error al obtener los datos del clima:', error);
  }
};

// Llamar al método cuando el componente se monta
onMounted(() => {
  getWeatherData();
});

const todo = ref('');
const consejo = ref ('');
const idea = ref('');
const mostrarConsejo = ref(false);
 
const generarConsejo = ()=> {
  const palabras = todo.value;
  if (palabras.includes('playa')){
    consejo.value = 'dont forget your suncream';

    
  }else if (palabras.includes ('salir')){consejo.value = 'pasalo super bien';
}else{
  consejo.value = 'Checa el tiempo de tu destino favorito';
}
return consejo.value;
};
const guardar = ()=>{
  const consejoGuardado = generarConsejo();
  localStorage.setItem('todo', consejoGuardado);
  idea.value = consejoGuardado;
  mostrarConsejo.value = true;
}

// Función para mostrar el consejo guardado en localStorage
/* const mostrarIdea = () => {
  const consejoGuardado = localStorage.getItem('todo');
  if (consejoGuardado) {
    idea.value = consejoGuardado;
  }
}; */

// Llamar a la función mostrarIdea cuando el componente se monta
/* onMounted(() => {
  mostrarIdea();
}); */

 /*  console.log(typeof localStorage.getItem('todo')) */
</script>

<!-- <script setup>
// Exporta weatherData para que esté disponible en el template
export { weatherData };
</script> -->




<style scoped>
.dailyCard {
  border: solid 2px black;
  background-color: #9e9491;
  width: 50%;
}
</style>
