import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <h1
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        🎟️ Ticket Manager
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <button
          onClick={() => navigate("/")}
          className={`px-3 py-2 rounded ${
            pathname === "/"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Homepage
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className={`px-3 py-2 rounded ${
            pathname === "/dashboard"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/tickets")}
          className={`px-3 py-2 rounded ${
            pathname === "/tickets"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Tickets
        </button>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-2 md:hidden z-10">
          <button
            onClick={() => handleNavigate("/")}
            className={`w-full text-left px-3 py-2 rounded ${
              pathname === "/"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Homepage
          </button>

          <button
            onClick={() => handleNavigate("/dashboard")}
            className={`w-full text-left px-3 py-2 rounded ${
              pathname === "/dashboard"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => handleNavigate("/tickets")}
            className={`w-full text-left px-3 py-2 rounded ${
              pathname === "/tickets"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Tickets
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
