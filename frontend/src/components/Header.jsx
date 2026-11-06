import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Header({ onCityAdded }) {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        bg-sky-900
        px-8
        py-4
        text-white
        shadow-lg
      "
    >
      <div className="flex items-center gap-4">
        <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />

        <h1 className="text-3xl font-bold">Weather App</h1>
      </div>

      <SearchBar onCityAdded={onCityAdded} />

      <Image
        src="/images/user.png"
        alt="User"
        width={45}
        height={45}
        className="rounded-full"
      />
    </header>
  );
}
