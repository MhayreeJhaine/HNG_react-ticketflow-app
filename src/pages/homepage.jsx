import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Hero from "../components/hero";
import Footer from "../components/footer";

const Homepage = () => {
  const [page] = useState("homepage");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    setIsAuthenticated(!!session);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-lineae-to-b from-blue-50 to-white">
      <main className="flex-1">
        <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            🎟️ Ticket Manager
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            {isAuthenticated && (
              <a
                href="/dashboard"
                className={`px-3 py-2 rounded ${
                  page === "dashboard"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Dashboard
              </a>
            )}
            <a
              href="/login"
              className={`px-3 py-2 rounded ${
                page === "login"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Login
            </a>
            <a
              href="/signup"
              className={`px-3 py-2 rounded ${
                page === "signup"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Get Started
            </a>
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
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-2 md:hidden transition-all duration-300 ease-in-out z-30">
              {isAuthenticated && (
                <a
                  href="/dashboard"
                  className={`w-full text-left px-3 py-2 rounded ${
                    page === "dashboard"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </a>
              )}
              <a
                href="/login"
                className={`w-full text-left px-3 py-2 rounded ${
                  page === "login"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="/signup"
                className={`w-full text-left px-3 py-2 rounded ${
                  page === "signup"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          )}
        </header>

        <Hero />

        {/* Features Section */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Manage Tickets
            </h3>
            <p className="text-gray-600">
              Easily create, track, and resolve tickets.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Stay Organized
            </h3>
            <p className="text-gray-600">
              View all open and closed tickets in one place.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Collaborate
            </h3>
            <p className="text-gray-600">
              Work with your team efficiently and effectively.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
