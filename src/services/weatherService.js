import axios from 'axios';

const API_KEY = '482944e26d320a80bd5e4f23b3de7d1f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function getWeatherByCity(city) {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY
    }
  });
}

export function getForecastByCity(city) {
  return axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY
    }
  });
}
