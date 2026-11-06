"use client";

import { addCity } from "../services/weatherApi";
import { useState } from "react";

export default function SearchBar({ onCityAdded }) {
  const [cityName, setCityName] = useState("");

  const handleAddCity = async () => {
    const data = await addCity(cityName);

    if (data.result) {
      await onCityAdded();
      setCityName("");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Add new city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        className="
          rounded-full
          bg-white/20
          px-4
          py-2
          outline-none
          placeholder:text-white
        "
      />

      <button
        onClick={handleAddCity}
        className="rounded-full bg-white/20 px-4 py-2"
      >
        Search
      </button>
    </div>
  );
}
