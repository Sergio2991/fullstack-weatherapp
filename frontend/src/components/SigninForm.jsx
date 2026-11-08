"use client";

import { useState } from "react";
import { signinUser } from "../services/userApi";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    const data = await signinUser(formData);

    console.log(data);

    if (data.result) {
      localStorage.setItem("loggedIn", "true");

      router.push("/weather");
    } else {
      setMessage(`${data.error}`);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Sign In</h2>

      <div className="flex flex-col gap-4">
        {message && (
          <p className="rounded bg-red-100 p-2 text-sm text-red-700">
            {message}
          </p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="rounded border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          className="rounded border p-2"
        />

        <button
          onClick={handleSignin}
          className="
    rounded
    bg-blue-600
    p-2
    text-white
    transition-all
    hover:bg-blue-700
    active:scale-95
  "
        >
          Login
        </button>
      </div>
    </div>
  );
}
