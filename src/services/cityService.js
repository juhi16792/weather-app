import axios from 'axios';

export const searchCity = (query) => {
    return axios.get(`https://api.weatherbit.io/v2.0/cities`, {
        params: {
            key: 'YOUR_WEATHERBIT_API_KEY',
            city: query
        }
    });
};
