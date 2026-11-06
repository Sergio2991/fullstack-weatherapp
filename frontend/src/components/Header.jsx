"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchBar from "./SearchBar";

export default function Header({ onCityAdded }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");

    router.push("/login");
  };

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

      <div className="flex items-center gap-4">
        <Image
          src="/images/user.png"
          alt="User"
          width={40}
          height={40}
          className="rounded-full"
        />

        <button
          onClick={handleLogout}
          className="
            rounded-full
            bg-red-500
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-red-600
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
}
