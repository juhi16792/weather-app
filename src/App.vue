<template>
  <div id="app">
    <weather-tabs />
  </div>
</template>

<script>
import WeatherTabs from './components/WeatherTabs.vue';

export default {
  name: 'App',
  components: {
    WeatherTabs
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
}
#app {
  text-align: center;
}
</style>
