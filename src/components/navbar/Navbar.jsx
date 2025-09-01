import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/1711800700333.jpg";

export default function Navbar({ cartItemsCount = 0 }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const checkUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user);
  };

  checkUser(); // check on mount
  window.addEventListener("storage", checkUser); // update if localStorage changes

  return () => window.removeEventListener("storage", checkUser);
}, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="w-16 h-16">
          <img
            src={logo}
            alt="Blabn Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        {isLoggedIn && (
          <ul
            className={`flex flex-col md:flex-row md:items-center gap-6 font-[family-name:main-font] text-lg absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li className="px-5 py-2 hover:bg-blue-700 hover:text-white rounded-2xl text-center md:text-left">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li
              className="px-5 py-2 hover:bg-blue-700 hover:text-white rounded-2xl text-center md:text-left cursor-pointer"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }
              }}
            >
              About
            </li>
            <li className="px-5 py-2 hover:bg-blue-700 hover:text-white rounded-2xl text-center md:text-left">
              <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            </li>
            <li
              className="px-5 py-2 hover:bg-blue-700 hover:text-white rounded-2xl text-center md:text-left cursor-pointer"
              onClick={() => {
                const contactSection = document.getElementById("contactUs");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }
              }}
            >
              ContactUs
            </li>
            <li className="px-5 py-2 hover:bg-blue-700 hover:text-white rounded-2xl text-center md:text-left">
              <Link to="/orders" onClick={() => setMenuOpen(false)}>Orders</Link>
            </li>
            <li className="px-5 py-2 hover:bg-blue-700 hover:text-white rounded-2xl text-center md:text-left">
              <Link to="/Categories" onClick={() => setMenuOpen(false)}>Categories</Link>
            </li>
          </ul>
        )}

        {/* Cart + Auth Buttons */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              {/* Cart */}
              <button
                onClick={() => navigate("/cart")}
                className="relative px-4 py-2 rounded-2xl bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all flex items-center gap-2"
              >
                <span className="text-xl">🛒</span>
                Cart
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-6 py-2.5 text-white bg-red-600 rounded-2xl text-lg hover:bg-red-700 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2.5 text-white bg-blue-700 rounded-2xl text-lg hover:bg-blue-900 transition-all"
            >
              SignUp
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
