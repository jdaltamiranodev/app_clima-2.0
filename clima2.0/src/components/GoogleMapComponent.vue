<template>
    <GoogleMap :center="center" :zoom="10" :apiKey="apiKey" style="width: 100%; height: 500px;" />
  </template>
  
  <script>
  import { ref } from 'vue';
  import { GoogleMap } from 'vue3-google-map';
  
  export default {
    name: 'GoogleMapComponent',
    components: {
      GoogleMap,
    },
    props: {
      center: Object,
    },
    data() {
      return {
        apiKey: 'AIzaSyAd9UGOF21EFsSHh0UwsqYPL22Mm5KPb6k'
      };
    },
  };
  </script>
  