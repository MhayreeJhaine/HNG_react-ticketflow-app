export default function TicketCard({ ticket }) {
  const statusColors = {
    Open: "bg-red-100 text-red-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{ticket.title}</h3>
      <span
        className={`text-sm mt-2 inline-block px-2 py-1 rounded ${
          statusColors[ticket.status]
        }`}
      >
        {ticket.status}
      </span>
    </div>
  );
}
