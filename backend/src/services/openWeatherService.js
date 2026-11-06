const API_KEY = process.env.OWM_API_KEY;

const fetchCityWeather = async (cityName) => {
  if (!API_KEY) {
    throw new Error("Missing OWN_API_KEY in environment variables");
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  return {
    cityName: data.name,
    main: data.weather[0].main,
    description: data.weather[0].description,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
  };
};

module.exports = {
  fetchCityWeather,
};
