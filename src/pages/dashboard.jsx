import { useEffect, useState } from "react";
import Header from "../components/header";
import Logout from "../components/logoutBtn";
// import LogoutButton from "../components/logoutBtn";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;
  const resolvedTickets = tickets.filter((t) => t.status === "Resolved").length;

  const recentTickets = [...tickets].reverse().slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-6 max-w-[1440px] mx-auto">
        <section className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-100 text-blue-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Total Tickets</h2>
            <p className="text-3xl font-bold">{totalTickets}</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Open Tickets</h2>
            <p className="text-3xl font-bold">{openTickets}</p>
          </div>
          <div className="bg-purple-100 text-purple-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">In Progress</h2>
            <p className="text-3xl font-bold">{inProgressTickets}</p>
          </div>
          <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Resolved</h2>
            <p className="text-3xl font-bold">{resolvedTickets}</p>
          </div>
        </section>

        {/* RECENT TICKETS */}
        {/* Recent Tickets Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Tickets
          </h3>
          {recentTickets.length > 0 ? (
            <ul className="space-y-3">
              {recentTickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {ticket.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {ticket.description}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ticket.status === "Open"
                        ? "bg-yellow-100 text-yellow-800"
                        : ticket.status === "In Progress"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No recent tickets yet.</p>
          )}
        </section>
        <Logout />
      </main>
    </div>
  );
};

export default Dashboard;
