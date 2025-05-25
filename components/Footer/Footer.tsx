import React from "react";
import Link from "next/link";
import { PiMapPin } from "react-icons/pi";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { RiArmchairLine } from "react-icons/ri";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-12 px-5 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <RiArmchairLine className="w-6 h-6" />
              <span className="text-xl font-semibold">FurStore</span>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-2">
                <PiMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">2357 Gordon Street, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePhone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">0123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">demo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Our team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Designers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Customer service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  FAQ&lsquo;s
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Return
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletters */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletters</h3>
            <div className="flex flex-col gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-1 text-sm outline-none border border-gray-200"
              />
              <button className="px-3 py-1 bg-teal-700 hover:bg-teal-800 text-white">
                Submit
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <FaSquareXTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <FaSquareInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <FaSquareFacebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            Copyright © 2025 GilaniRabbu. All Rights Reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex gap-2">
            <div className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
              Apple Pay
            </div>
            <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
              DISCOVER
            </div>
            <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              Mastercard
            </div>
            <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
              VISA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
