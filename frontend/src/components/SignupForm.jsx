"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signinUser } from "../services/userApi";

export default function SigninForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    const data = await signinUser(formData);

    if (data.result) {
      router.push("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Sign In</h2>

      <div className="flex flex-col gap-4">
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
          className="rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
