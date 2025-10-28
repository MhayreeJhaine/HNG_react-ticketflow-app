import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">🎟️ Ticket Manager</h1>

      <nav className="space-x-4">
        <Link
          to={"/homepage"}
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Homepage
        </Link>
        <Link
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Dashboard
        </Link>
        <Link
          to="/tickets"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Tickets
        </Link>
      </nav>
    </header>
  );
};

export default Header;
