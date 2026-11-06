const express = require("express");

const router = express.Router();

const {
  getWeather,
  getWeatherByCityName,
  createWeather,
  removeWeather,
} = require("../controllers/weatherController");

router.get("/weather", getWeather);

router.get("/weather/:cityName", getWeatherByCityName);

router.post("/weather", createWeather);

router.delete("/weather/:cityName", removeWeather);

module.exports = router;
