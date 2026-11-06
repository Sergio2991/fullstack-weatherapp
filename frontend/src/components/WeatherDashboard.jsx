"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import WeatherList from "./WeatherList";

import { getWeather, deleteCity } from "../services/weatherApi";

export default function WeatherDashboard() {
  const [weather, setWeather] = useState([]);

  const loadWeather = async () => {
    const data = await getWeather();

    setWeather(data.weather);
  };

  const handleDeleteCity = async (cityName) => {
    await deleteCity(cityName);

    await loadWeather();
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <>
      <Header onCityAdded={loadWeather} />

      <div className="p-8">
        <WeatherList weather={weather} onDelete={handleDeleteCity} />
      </div>
    </>
  );
}
