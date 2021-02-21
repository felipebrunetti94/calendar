import weatherService from "../infra/openWeatherService";

const getWeather = async (city, { onSuccess, onError }) => {
  try {
    const weather = await weatherService.getCurrentWeather(city);
    onSuccess(weather);
  } catch (error) {
    onError(error);
  }
};

export default getWeather;
