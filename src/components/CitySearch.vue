<template>
  <div>
    <input v-model="query" @input="searchCity" placeholder="Search for a city" />
    <ul v-if="cities.length">
      <li v-for="city in cities" :key="city.id" @click="selectCity(city.name)">
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { searchCity } from '@/services/cityService';

export default {
  data() {
    return {
      query: '',
      cities: []
    };
  },
  methods: {
    searchCity() {
      if (this.query.length > 2) {
        searchCity(this.query).then(response => {
          this.cities = response.data;
        });
      }
    },
    selectCity(city) {
      this.$emit('city-selected', city);
      this.query = '';
      this.cities = [];
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px;
  cursor: pointer;
}
li:hover {
  background-color: #f0f0f0;
}
</style>

