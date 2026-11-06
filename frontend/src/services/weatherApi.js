const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getWeather = async () => {
  const response = await fetch(`${API_URL}/weather`);

  return response.json();
};

export const addCity = async (cityName) => {
  const response = await fetch(`${API_URL}/weather`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cityName }),
  });

  return response.json();
};

export const deleteCity = async (cityName) => {
  const response = await fetch(`${API_URL}/weather/${cityName}`, {
    method: "DELETE",
  });

  return response.json();
};
