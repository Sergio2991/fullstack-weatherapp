import ProtectedWeather from "../../components/ProtectedWeather";

export default function WeatherPage() {
  return (
    <main
      className="
        min-h-screen
        bg-linear-to-b
        from-sky-800
        via-sky-500
        to-sky-200
      "
    >
      <ProtectedWeather />
    </main>
  );
}
