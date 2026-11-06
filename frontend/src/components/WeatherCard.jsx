import Image from "next/image";

export default function WeatherCard({ city, onDelete }) {
  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-lg
        transition
        hover:scale-105
      "
    >
      <h2 className="mb-2 text-xl font-bold">{city.cityName}</h2>

      <p className="mb-4 capitalize text-gray-500">{city.description}</p>

      <div className="flex justify-center mb-4">
        <Image
          src={`/images/${city.main}.png`}
          alt={city.main}
          width={60}
          height={60}
          className="font-semibold
          text-blue-600"
        />
        {city.tempMin}°C
        <span className="font-semibold text-blue-600">{city.tempMax}°C</span>
      </div>
      <button
        onClick={() => onDelete(city.cityName)}
        className="
    mt-4
    rounded-full
    bg-blue-600
    px-4
    py-2
    text-white
    hover:bg-blue-700
  "
      >
        Delete
      </button>
    </div>
  );
}
