import React from 'react';
import axios from 'axios';

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "10c9febc354435ffc3d32e3a73e7e009";

export const fetchData = async (query) => {
    const { data } = await axios.get(API_URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data;
}

