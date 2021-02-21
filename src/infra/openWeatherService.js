import Axios from "axios";

const OPEN_WEATHER_URL = `${process.env.REACT_APP_OPEN_WEATHER_URL}` || "";
const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

const axios = Axios.create({
  baseURL: OPEN_WEATHER_URL,
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

const errorWrapper = (req) => async (...props) => {
  try {
    return await req(...props);
  } catch (error) {
    console.error("API Error", error);
    throw extractError(error);
  }
};

const extractError = (error) => {
  if (error.response) {
    const extractedError = new Error();
    extractedError.detail = error.response.data.message;
    return extractedError;
  }
  return error;
};

const get = errorWrapper(axios.get);

const getCurrentWeather = async (city) => {
  const { data } = await get(`weather?q=${city}&appid=${OPEN_WEATHER_KEY}`);
  return data.weather[0].description;
};

const weatherService = {
  getCurrentWeather,
};

export default weatherService;
