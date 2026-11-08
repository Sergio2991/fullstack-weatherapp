"use client";

import { useState } from "react";
import { signupUser } from "../services/userApi";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    const data = await signupUser(formData);

    if (data.result) {
      alert("User created successfully");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="rounded border p-2"
        />

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
          onClick={handleSignup}
          className="
            rounded
            bg-green-600
            p-2
            text-white
            transition-all
            duration-150
            hover:bg-green-700
            active:scale-95
          "
        >
          Register
        </button>
      </div>
    </div>
  );
}
