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
    <header className="bg-sky-900 px-4 py-4 text-white shadow-lg">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <Image src="/images/logo.svg" alt="Logo" width={45} height={45} />

          <h1 className="text-2xl font-bold md:text-3xl">Weather App</h1>
        </div>

        {/* Search */}
        <div className="w-full md:w-auto">
          <SearchBar onCityAdded={onCityAdded} />
        </div>

        {/* User + Logout */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/user.png"
            alt="User"
            width={36}
            height={36}
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
              transition-all
              duration-150
              hover:bg-red-600
              active:scale-95
              active:bg-red-700
            "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
