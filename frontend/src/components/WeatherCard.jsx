import Image from "next/image";

export default function WeatherCard({ city, onDelete }) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-lg
        transition
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h2 className="text-2xl font-bold">{city.cityName}</h2>

      <p className="mt-1 capitalize text-gray-500">{city.description}</p>

      <div className="my-6 flex justify-center">
        <Image
          src={`/images/${city.main}.png`}
          alt={city.main}
          width={100}
          height={100}
          loading="eager"
        />
      </div>

      <div className="text-center">
        <p className="text-4xl font-bold text-blue-600">{city.tempMax}°C</p>

        <p className="mt-1 text-gray-500">Min {city.tempMin}°C</p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => onDelete(city.cityName)}
          className="
            rounded-full
            bg-red-500
            px-6
            py-2
            text-white
            transition
            hover:bg-red-600
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
