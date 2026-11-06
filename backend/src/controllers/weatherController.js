const {
  getAllWeather,
  getWeatherByCity,
  cityExists,
  addWeather,
  deleteWeatherByCity,
} = require("../services/weatherService");

const { fetchCityWeather } = require("../services/openWeatherService");

const getWeather = async (req, res) => {
  const weather = await getAllWeather();

  res.json({ weather });
};

const getWeatherByCityName = async (req, res) => {
  const { cityName } = req.params;

  const weather = await getWeatherByCity(cityName);

  if (!weather) {
    return res.status(404).json({
      result: false,
      error: "City not found",
    });
  }

  res.json({
    result: true,
    weather,
  });
};

const createWeather = async (req, res) => {
  try {
    const { cityName } = req.body || {};

    if (!cityName) {
      return res.status(400).json({
        result: false,
        error: "City name is required",
      });
    }

    const exists = await cityExists(cityName);
    console.log("Exists result:", exists);

    if (exists) {
      return res.status(409).json({
        result: false,
        error: "City already saved",
      });
    }

    const newCity = await fetchCityWeather(cityName);

    const savedCity = await addWeather(newCity);

    res.status(201).json({
      result: true,
      weather: savedCity,
    });
  } catch (error) {
    res.status(404).json({
      result: false,
      error: error.message,
    });
  }
};

const removeWeather = async (req, res) => {
  const { cityName } = req.params;

  const deletedCity = await deleteWeatherByCity(cityName);

  if (!deletedCity) {
    return res.status(404).json({
      result: false,
      error: "City not found",
    });
  }

  const weather = await getAllWeather();

  res.json({
    result: true,
    weather,
  });
};

module.exports = {
  getWeather,
  getWeatherByCityName,
  createWeather,
  removeWeather,
};
