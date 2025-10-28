import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        🎟️ Ticket Manager
      </h1>

      <nav className="space-x-4">
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
    </header>
  );
};

export default Header;
