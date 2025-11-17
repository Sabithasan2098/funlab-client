"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import NavDropdown from "./sheredBtns/NavDropDownBtn";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  // drawer------------>
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const desktopNav = (
    <>
      <li>
        <NavDropdown
          title="Movies"
          items={[
            { text: "Sub Button 1", href: "#" },
            { text: "Sub Button 2", href: "#" },
            { text: "Sub Button 3", href: "#" },
            { text: "Sub Button 4", href: "#" },
          ]}
        />
      </li>
      <li>
        <NavDropdown
          title="Movies"
          items={[
            { text: "Sub Button 1", href: "#" },
            { text: "Sub Button 2", href: "#" },
            { text: "Sub Button 3", href: "#" },
            { text: "Sub Button 4", href: "#" },
          ]}
        />
      </li>
    </>
  );
  const mobileNav = (
    <>
      <div>
        <li>
          <Link href="#" onClick={closeDrawer} className="text-lg py-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" onClick={closeDrawer} className="text-lg py-4">
            Movies
          </Link>
        </li>
        <li>
          <Link href="#" onClick={closeDrawer} className="text-lg py-4">
            TV Shows
          </Link>
        </li>
        <li>
          <Link href="#" onClick={closeDrawer} className="text-lg py-4">
            About
          </Link>
        </li>
      </div>
    </>
  );

  return (
    <div className="bg-black text-white">
      {/* Main Navbar */}
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Hamburger/X Button */}
          <button
            className="btn btn-ghost lg:hidden"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? (
              // X icon when drawer is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when drawer is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link
            href="/"
            className="text-sm md:text-xl text-orange-500 inline-flex navLogoStyle"
          >
            Funlab<span className="text-white navLogoGlow">. movies</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{desktopNav}</ul>
        </div>

        <div className="navbar-end">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search..."
            className="bg-[#272727]  px-4 pr-8 py-2 rounded-sm relative w-80 focus:outline-none focus:ring-0"
          />
          <button className=" absolute top-8 right-4 cursor-pointer">
            <IoSearch size={20} />
          </button>
        </div>
      </div>

      {/* Full Screen Drawer for Mobile */}

      <div
        className={`
          fixed inset-0  z-50 transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
          lg:hidden
        `}
      >
        {/* Drawer Content */}
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close Button at Top */}
          <Link
            href="/"
            className="text-base text-orange-500 inline-flex navLogoStyle absolute top-7 left-4"
          >
            Funlab<span className="text-white navLogoGlow">. movies</span>
          </Link>
          <button
            className="absolute top-4 right-4 btn btn-ghost btn-circle"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <input
            type="text"
            name=""
            id=""
            className="bg-gray-500 mb-2 w-60 px-4 py-1 rounded-md  "
            placeholder="Search..."
          />

          {/* Navigation Links */}
          <ul className="space-y-2 flex-1">{mobileNav}</ul>

          {/* Bottom Section with Theme Toggle
          <div className="py-6 border-t border-gray-700">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div> */}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeDrawer}
        />
      )}
    </div>
  );
};

export default Navbar;
