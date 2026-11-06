import SearchBar from "./SearchBar";

export default function Header({ onCityAdded }) {
  return (
    <header className="flex items-center justify-between bg-sky-800 px-8 py-4 text-white">
      <h1 className="text-2xl font-bold">Weather App</h1>

      <SearchBar onCityAdded={onCityAdded} />

      <div className="h-10 w-10 rounded-full bg-white/20" />
    </header>
  );
}
