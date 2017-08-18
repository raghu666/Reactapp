import axios from 'axios'; 

const API_KEY = 'cf37646b232e83a29ee97d8f58f40780';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 

export function fetchWeather(city) {
    
    const url =`${ROOT_URL}&q=${city},us`; 
    const request = axios.get(url);
    
    
    return {
        type: FETCH_WEATHER,
        payload: request 
    };
}
