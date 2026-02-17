"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import CustomLink from "../custom/CustomLink";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const Page = pathname.startsWith("/movies") || pathname.startsWith("/series");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  // search---------------------------------->
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${query}`);
    setQuery("");
  };

  // navbar drawer--------------------------->
  const [open, setOpen] = useState(false);

  const Nav = (
    <>
      <li>
        <CustomLink
          path="/industry/hollywood"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          HollyWood
        </CustomLink>
      </li>
      <li>
        <CustomLink
          path="/industry/bollywood"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          BollyWood
        </CustomLink>
      </li>
      <li>
        <CustomLink
          path="/industry/chinese"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          Chinese
        </CustomLink>
      </li>
      <li>
        <CustomLink
          path="/industry/japanese"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          Japanese
        </CustomLink>
      </li>
      <li>
        <CustomLink
          path="/industry/korean"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          Korean
        </CustomLink>
      </li>
      <li>
        <CustomLink
          path="/industry/turkish"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          Turkish
        </CustomLink>
      </li>
      <li>
        <CustomLink
          path="/movieSeries"
          className="text-sm font-semibold hover:text-[#FFA500]"
        >
          Series Movies
        </CustomLink>
      </li>
    </>
  );

  return (
    <div className="bg-black text-white">
      {/* =======================
          ✅ XL Movies Navbar Only
      ======================= */}
      {Page && (
        <div className="hidden xl:flex items-center justify-between  px-10 py-4">
          {/* Left Logo */}
          <Link
            href="/"
            className="text-sm md:text-xl text-orange-500 inline-flex navLogoStyle"
          >
            {" "}
            FUNLAB
            <span className="text-white navLogoGlow">.entertainment</span>{" "}
          </Link>

          {/* Center Search */}
          <div className="relative w-[550px] ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(e);
                closeDrawer(); // drawer বন্ধ হবে
              }}
            >
              <input
                type="text"
                name="search"
                placeholder="Search..."
                autoComplete="off"
                spellCheck="false"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-[#272727] px-4 pr-10 py-2 rounded-sm w-full focus:outline-none"
              />

              <button
                type="submit"
                className="absolute top-2 right-0  cursor-pointer w-10 flex items-center justify-center"
              >
                <IoSearch size={20} className="text-white" />
              </button>
            </form>
          </div>

          {/* Right Fancy Placeholder */}
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
              Profile
            </button>
          </div>
        </div>
      )}

      {/* ==========================
          ✅ Default Navbar (All Devices)
          Movies Page XL বাদে সব জায়গায় থাকবে
      ========================== */}
      <div className={`${Page ? "xl:hidden" : ""}`}>
        {/* তোমার আগের পুরা navbar এখানে থাকবে */}
        <div className="bg-black text-white">
          {/* Main Navbar */}
          <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
              {/* Mobile Hamburger/X Button */}
              <button
                className="btn btn-ghost xl:hidden"
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
                FUNLAB
                <span className="text-white navLogoGlow">.entertainment</span>
              </Link>
              {/* onclick the search icon open search input */}

              <div className="absolute right-5 top-[22px] md:hidden">
                <button onClick={() => setOpen(!open)}>
                  {open ? (
                    <RxCross2 className="scale-130 drop-shadow-2xl text-red-500 size-5" />
                  ) : (
                    <IoSearch size={20} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-start hidden xl:flex">
              <ul className="menu menu-horizontal min-w-[620px] gap-0 ">
                {Nav}
              </ul>
            </div>

            <div className="navbar-end relative hidden md:flex md:right-6 xl:right-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(e);
                  closeDrawer(); // drawer বন্ধ হবে
                }}
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  autoComplete="off"
                  spellCheck="false"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="bg-[#272727] px-4 pr-10 py-2 rounded-sm w-80 focus:outline-none"
                />

                <button
                  type="submit"
                  className="absolute top-2 right-0  cursor-pointer w-10 flex items-center justify-center"
                >
                  <IoSearch size={20} className="text-white" />
                </button>
              </form>
            </div>
          </div>

          {/* Full Screen Drawer for Mobile */}

          <div
            className={`
          fixed inset-0  z-50 transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
          xl:hidden w-72 md:w-80 lg:w-96
        `}
          >
            {/* Drawer Content */}
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Close Button at Top */}
              <Link
                href="/"
                className="text-base text-orange-500 inline-flex navLogoStyle absolute top-7 left-4"
              >
                FUNLAB
                <span className="text-white navLogoGlow">. entertainment</span>
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

              {/* Navigation Links */}
              <ul className="space-y-2 flex-1">{Nav}</ul>

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
              className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden w-72 md:w-80 lg:w-[400px]"
              onClick={closeDrawer}
            />
          )}
        </div>
      </div>

      {/* search icon drawer content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-24" : "max-h-0"
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(e);
            closeDrawer(); // drawer বন্ধ হবে
          }}
          className="relative w-full flex md:hidden "
        >
          <input
            type="text"
            name="search"
            placeholder="Search..."
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-[#272727] px-4 pr-10 py-2 w-full focus:outline-none"
          />

          <button
            type="submit"
            className="absolute top-2 right-2  cursor-pointer w-10 flex items-center justify-center"
          >
            <IoSearch size={20} className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
