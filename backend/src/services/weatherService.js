const City = require("../models/City");

const getAllWeather = async () => {
  return await City.find();
};

const getWeatherByCity = async (cityName) => {
  return await City.findOne({
    cityName: {
      $regex: new RegExp(`^${cityName}$`, "i"),
    },
  });
};

const cityExists = async (cityName) => {
  const city = await City.findOne({
    cityName: {
      $regex: new RegExp(`^${cityName}$`, "i"),
    },
  });

  return !!city;
};

const addWeather = async (city) => {
  return await City.create(city);
};

const deleteWeatherByCity = async (cityName) => {
  const deletedCity = await City.findOneAndDelete({
    cityName: {
      $regex: new RegExp(`^${cityName}$`, "i"),
    },
  });

  return deletedCity;
};

module.exports = {
  getAllWeather,
  getWeatherByCity,
  cityExists,
  addWeather,
  deleteWeatherByCity,
};
