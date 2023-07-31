import axios from 'axios';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/';
const API_QUOTE_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const API_QUOTE_KEY = 'yqHpZQq63hmymetEzbcANQ==DbrM86ASySUmsXt4';

const optionsQuote = {
  method: 'GET',
  headers: {
    'X-Api-Key': API_QUOTE_KEY,
  },
};

export const getQoute = async () => {
  try {
    const response = await axios.get(API_QUOTE_URL, optionsQuote);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherPosition = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${WEATHER_URL}weather?lat=${lat}&lon=${lon}&units=metric&appid=cdbe92c7e567f9d0211564722a1fd4dc`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getWeather = async q => {
  try {
    const response = await axios.get(
      `${WEATHER_URL}weather?q=${q}&units=metric&appid=cdbe92c7e567f9d0211564722a1fd4dc`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
