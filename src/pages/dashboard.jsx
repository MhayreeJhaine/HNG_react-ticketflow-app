import { useEffect, useState } from "react";
import Header from "../components/header";
import Logout from "../components/logoutBtn";
import Footer from "../components/footer";
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
  const closedTickets = tickets.filter((t) => t.status === "Closed").length;

  const recentTickets = [...tickets].reverse().slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-6 max-w-[1440px] mx-auto">
        <section className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <Logout />
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-100 text-blue-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Total Tickets</h2>
            <p className="text-3xl font-bold">{totalTickets}</p>
          </div>
          <div className="bg-yellow-100 text-yellow-600 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Open Tickets</h2>
            <p className="text-3xl font-bold">{openTickets}</p>
          </div>
          <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">In Progress</h2>
            <p className="text-3xl font-bold">{inProgressTickets}</p>
          </div>
          <div className="bg-red-100 text-red-600 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Closed</h2>
            <p className="text-3xl font-bold">{closedTickets}</p>
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
                        ? "bg-yellow-100 text-yellow-600"
                        : ticket.status === "In Progress"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-600"
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
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
