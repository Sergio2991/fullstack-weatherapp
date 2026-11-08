"use client";

import { useState } from "react";

import SignupForm from "../../components/SignupForm";
import SigninForm from "../../components/SigninForm";

export default function LoginPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-100 p-4">
      <div className="w-full max-w-md">
        {showSignup ? (
          <>
            <SignupForm />

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Already have an account?</p>

              <button
                onClick={() => setShowSignup(false)}
                className="
                  mt-2
                  font-semibold
                  text-blue-600
                  hover:text-blue-800
                  hover:underline
                "
              >
                Sign In
              </button>
            </div>
          </>
        ) : (
          <>
            <SigninForm />

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account yet?
              </p>

              <button
                onClick={() => setShowSignup(true)}
                className="
                  mt-2
                  font-semibold
                  text-blue-600
                  hover:text-blue-800
                  hover:underline
                "
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
