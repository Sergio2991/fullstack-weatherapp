import WeatherCard from "./WeatherCard";

export default function WeatherList({ weather, onDelete }) {
  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {weather.map((city, index) => (
          <WeatherCard
            key={`${city.cityName}-${index}`}
            city={city}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}
