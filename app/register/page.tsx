"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Register() {
  const [newsletter, setNewsletter] = useState(false);

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <div className="py-10">
          <h1 className="text-center font-semibold text-2xl md:text-4xl">
            Your Wishlist
          </h1>
          <div className="flex justify-center items-center gap-2.5">
            <Link href={"/"}>Home</Link>-<p>Page Register</p>
          </div>
        </div>

        <div className="max-w-lg mx-auto mt-5">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full text-sm px-5 py-3 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-full text-sm px-5 py-3 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full text-sm px-5 py-3 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full text-sm px-5 py-3 border border-gray-300 rounded outline-none"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="h-4 w-4"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 block text-sm text-gray-600"
              >
                Sign up for our newsletter
              </label>
            </div>
            <div className="text-sm text-gray-600">
              If you have an account, please{" "}
              <Link
                href="/login"
                className="font-semibold transition-colors duration-300 text-blue-500 hover:text-teal-500"
              >
                Login Here
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
