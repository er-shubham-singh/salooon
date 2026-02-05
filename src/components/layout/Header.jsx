import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";
import { useEffect } from "react";
import React from 'react'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-teal-600" />
            <span className="text-2xl font-serif font-bold text-gray-900">
              Naileditt Saloon/ Beauty Parlor
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-teal-600 font-semibold"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              Book Now
            </Link>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Slide from Right */}
{/* Mobile Menu */}
{isMenuOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/40 z-40 md:hidden"
      onClick={() => setIsMenuOpen(false)}
    />

    {/* Slide Drawer */}
    <div
      className={`fixed top-0 left-0 h-full w-80 max-w-[85%] bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-teal-600" />
          <span className="font-bold text-gray-900 dark:text-white">
            Menu
          </span>
        </div>

        <button onClick={() => setIsMenuOpen(false)}>
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Navigation */}
      <div className="px-6 py-4 space-y-2 overflow-y-auto h-[calc(100%-140px)]">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={`block py-3 px-4 rounded-lg transition ${
              isActive(item.path)
                ? "bg-teal-50 text-teal-600 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-4 border-t dark:border-gray-700 space-y-3">
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="block text-center bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 font-semibold"
        >
          Book Now
        </Link>

        <button
          onClick={() => {
            toggleTheme();
            setIsMenuOpen(false);
          }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 font-medium"
        >
          {theme === "dark" ? (
            <>
              <Sun className="w-5 h-5 text-yellow-400" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="w-5 h-5" />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  </>
)}

      </nav>
    </header>
  );
}
