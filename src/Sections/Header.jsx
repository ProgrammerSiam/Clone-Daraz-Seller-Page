// Import necessary assets and components
import logo from "../Assets/logo/logo.png";
import world from "../Assets/logo/lan.png";
import flag from "../Assets/logo/ic-flag-bd.png";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

// Define the Navbar component
export default function Navbar() {
  // State to control the mobile menu
  const [isSideMenuOpen, setMenu] = useState(false);

  // Array of navigation links
  const navlinks = [
    {
      label: "Login",
      link: "",
    },
    {
      label: "Sign up",
      link: "/",
    },
  ];

  return (
    <header>
      {/* Navigation bar container */}
      <nav className="flex justify-between container items-center py-4">
        <div className="flex items-center gap-8">
          {/* Left section of the navbar */}
          <div className="flex gap-x-5 items-center">
            <a href="/">
              <img
                className="object-cover w-32"
                src={logo}
                alt="Company Logo"
              />
            </a>
            {/* Language and region selector (visible on larger screens) */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-3">
                <img className="w-5" src={world} alt="World Icon" />
                <span className="text-sm">English</span>

                <img className="w-5" src={flag} alt="Flag Icon" />
                <span className="text-sm flex items-center gap-x-1 cursor-pointer">
                  Bangladesh <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar mobile menu (visible on smaller screens) */}
        <div
          className={clsx(
            "fixed h-screen  lg:hidden z-50 w-full lg:w-[50%] bg-black/50 backdrop-blur-sm top-0 right-0 left-0 transform -translate-x-full lg:translate-x-0 transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <div className="text-black bg-white flex-col absolute right-0 left-0 top-0 h-screen p-8 bottom-0 gap-5 z-50 w-full lg:w-[50%] flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-2xl lg:text-3xl cursor-pointer"
            />

            {/* Mobile menu links */}
            {navlinks.map((link, index) => (
              <a key={index} className="font-bold text-lg" href={link.link}>
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-y-2 mb-2">
              <img className="w-4 lg:w-5" src={world} alt="World Icon" />
              <span className="text-sm lg:text-base">English</span>

              <img className="w-4 lg:w-5" src={flag} alt="Flag Icon" />
              <span className="text-sm lg:text-base cursor-pointer flex items-center gap-x-1">
                Bangladesh <IoMdArrowDropdown />
              </span>
            </div>
          </div>
        </div>

        {/* Right section of the navbar */}
        <div className="">
          <div className="hidden lg:block">
            {/* User login and search form (visible on larger screens) */}
            <form className="flex items-center gap-x-5">
              {/* Email input */}
              <div className="flex flex-col text-slate-500">
                <label htmlFor="email" className="font-medium">
                  Email or Phone
                </label>
                <input
                  className="h-8 w-[100%] pr-12 p-2 text-xs border rounded-md border-slate-300"
                  type="email"
                  name=""
                  id="email"
                  placeholder="Please enter"
                  required
                />
              </div>
              {/* Password input */}
              <div className="flex flex-col text-slate-500">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  className="h-8 w-[100%] pr-12 p-2 text-xs border rounded-md border-slate-300"
                  type="password"
                  name=""
                  id="password"
                  placeholder="Please enter"
                  required
                />
                <span className="absolute px-2 py-4 text-xs underline cursor-pointer text-red-500 top-16">
                  Forgot password?
                </span>
              </div>
              {/* Login button */}
              <div className="mt-5">
                <input
                  className="px-8 py-2 text-white rounded-md bg-orange"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>

          {/* Mobile menu icon (visible on smaller screens) */}
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
        </div>
      </nav>
    </header>
  );
}
