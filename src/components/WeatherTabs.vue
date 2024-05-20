<template>
  <div class="tabs-container">
    <div class="tabs">
      <button
        v-for="city in cities"
        :key="city"
        @click="selectCity(city)"
        :class="{ active: city === selectedCity }"
      >
        {{ city }}
      </button>
      <input
        type="text"
        placeholder="Search for a city"
        v-model="searchQuery"
        @keyup.enter="searchCity"
      />
    </div>
    <weather-tab v-if="selectedCity" :city="selectedCity" />
  </div>
</template>

<script>
import WeatherTab from './WeatherTab.vue';

export default {
  components: { WeatherTab },
  data() {
    return {
      cities: ['Rio de Janeiro', 'Beijing', 'Los Angeles'],
      selectedCity: 'Rio de Janeiro',
      searchQuery: ''
    };
  },
  methods: {
    selectCity(city) {
      this.selectedCity = city;
    },
    searchCity() {
      if (this.searchQuery.trim()) {
        this.selectedCity = this.searchQuery.trim();
        this.searchQuery = '';
      }
    }
  }
};
</script>

<style scoped>
.tabs-container {
  text-align: center;
}
.tabs {
  display: flex;
  justify-content: center;
  background-color: #1976d2;
  padding: 10px;
}
button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
}
button.active {
  border-bottom: 2px solid white;
}
input {
  padding: 10px;
  font-size: 16px;
  margin-left: 20px;
}
</style>
