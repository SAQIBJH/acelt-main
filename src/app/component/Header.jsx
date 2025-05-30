"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest(".lg:hidden")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navlink = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/pages/products" },
    { label: "Projects", link: "/pages/projects" },
    { label: "About", link: "/pages/about-us" },
    { label: "Contact", link: "/pages/contact-us" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-between py-4 px-6 sm:px-10 font-sans text-gray-800 bg-white shadow-md z-50 border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={144}
          height={40}
          className="w-28 transition-transform hover:scale-105 max-sm:w-20"
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6">
          {navlink.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={handleToggle}
        className="lg:hidden p-2 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleToggle}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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

        {/* Menu Content */}
        <div className="mt-14 p-6">
          <Link href="/" className="mb-6 block">
            <Image
              src="/logo.png"
              alt="logo"
              width={144}
              height={40}
              className="w-24"
            />
          </Link>
          <ul className="space-y-4">
            {navlink.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-red-600 text-base font-medium block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200"
                  onClick={handleToggle} // Close menu on link click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for closing menu on outside click */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggle}
        ></div>
      )}
    </header>
  );
}