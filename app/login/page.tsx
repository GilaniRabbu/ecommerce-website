"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <div className="py-10">
          <h1 className="text-center font-semibold text-2xl md:text-4xl">
            Your Wishlist
          </h1>
          <div className="flex justify-center items-center gap-2.5">
            <Link href={"/"}>Home</Link>-<p>Page Login</p>
          </div>

          <div className="max-w-lg mx-auto mt-5">
            <h1 className="text-3xl font-bold mb-6">SIGN IN</h1>
            <p className="mb-6 text-gray-600">
              Insert your account information:
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full text-sm px-5 py-3 border border-gray-300 rounded outline-none"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="PASSWORD"
                  className="w-full text-sm px-5 py-3 border border-gray-300 rounded outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              <div className="mb-6 text-sm">
                Forgot your{" "}
                <Link
                  href="/forgot-password"
                  className="font-semibold transition-colors duration-300 text-blue-500 hover:text-teal-500"
                >
                  Password ?
                </Link>
              </div>
              <div className="text-sm mb-6 text-gray-600">
                If you don&apos;t have an account, please{" "}
                <Link
                  href="/register"
                  className="font-semibold transition-colors duration-300 text-blue-500 hover:text-teal-500"
                >
                  Register Here
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-700 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
