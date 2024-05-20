<template>
  <div class="weather-forecast">
    <div class="forecast-hourly" v-if="hourlyForecast.length">
      <h3>Next hours</h3>
      <div class="hour" v-for="hour in hourlyForecast" :key="hour.dt">
        <p>{{ formatTime(hour.dt) }}</p>
        <p>{{ hour.main.temp }}°C</p>
        <img :src="getIconUrl(hour.weather[0].icon)" alt="weather icon">
      </div>
    </div>
    <div class="forecast-daily" v-if="dailyForecast.length">
      <h3>Next 5 days</h3>
      <div class="day" v-for="day in dailyForecast" :key="day.dt">
        <p>{{ formatDate(day.dt) }}</p>
        <p>{{ day.main.temp }}°C</p>
        <img :src="getIconUrl(day.weather[0].icon)" alt="weather icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['forecast'],
  computed: {
    hourlyForecast() {
      return this.forecast && this.forecast.list ? this.forecast.list.slice(0, 5) : [];
    },
    dailyForecast() {
      return this.forecast && this.forecast.list
        ? this.forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5)
        : [];
    }
  },
  methods: {
    formatTime(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toDateString();
    },
    getIconUrl(icon) {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
  }
};
</script>

<style scoped>
.weather-forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.forecast-hourly, .forecast-daily {
  width: 100%;
}
.hour, .day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
h3 {
  text-align: left;
  width: 100%;
}
</style>
