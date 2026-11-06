"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import WeatherDashboard from "./WeatherDashboard";

export default function ProtectedWeather() {
  const router = useRouter();

  const [authorised, setAuthorised] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      router.push("/login");
      return;
    }

    setAuthorised(true);
  }, [router]);

  if (!authorised) {
    return null;
  }

  return <WeatherDashboard />;
}
