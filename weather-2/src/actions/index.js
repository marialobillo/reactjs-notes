import axios from 'axios';

const API_KEY = '24cd3addd3cde7406c5c07e18eaca10d';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(){
  const url = `${ROOT_URL}&q=${city},es`;
  const request = axios.get(url);

  return (
    type: FETCH_WEATHER,
    payload: request
  );
}
