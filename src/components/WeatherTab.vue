<template>
  <div class="weather-tab">
    <h2>{{ city }}</h2>
    <button @click="refreshWeather">Refresh</button>
    <div v-if="weather" class="weather-info">
      <div class="current-weather">
        <p>{{ weather.main.temp }}°C</p>
        <p>{{ weather.weather[0].description }}</p>
      </div>
      <weather-forecast v-if="forecast" :forecast="forecast" />
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import { getWeatherByCity, getForecastByCity } from '@/services/weatherService';
import WeatherForecast from './WeatherForecast.vue';

export default {
  components: { WeatherForecast },
  props: ['city'],
  data() {
    return {
      weather: null,
      forecast: null
    };
  },
  created() {
    this.fetchWeather();
    this.fetchForecast();
  },
  methods: {
    fetchWeather() {
      getWeatherByCity(this.city)
        .then(response => {
          this.weather = response.data;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    },
    fetchForecast() {
      getForecastByCity(this.city)
        .then(response => {
          this.forecast = response.data;
        })
        .catch(error => {
          console.error('Error fetching forecast data:', error);
        });
    },
    refreshWeather() {
      this.fetchWeather();
      this.fetchForecast();
    }
  }
};
</script>

<style scoped>
.weather-tab {
  padding: 20px;
  text-align: center;
}
.weather-info {
  margin-top: 20px;
}
.current-weather {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>

