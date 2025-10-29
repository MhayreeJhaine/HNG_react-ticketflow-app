import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "../components/header";
import Footer from "../components/footer";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [editingTicket, setEditingTicket] = useState(null);

  // Load tickets from localStorage
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const saveTickets = (updatedTickets) => {
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (editingTicket) {
      // Update existing ticket
      const updated = tickets.map((t) =>
        t.id === editingTicket.id ? { ...t, title, description, status } : t
      );
      saveTickets(updated);
      toast.success("Ticket updated successfully!");
      setEditingTicket(null);
    } else {
      // Create new ticket
      const newTicket = {
        id: Date.now(),
        title,
        description,
        status,
        createdAt: new Date().toISOString(),
      };
      saveTickets([...tickets, newTicket]);
      toast.success("Ticket created!");
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setStatus("Open");
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setTitle(ticket.title);
    setDescription(ticket.description);
    setStatus(ticket.status);
  };

  const handleDelete = (id) => {
    // Show a custom toast confirmation
    toast.custom((t) => (
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col items-center space-y-3">
        <p className="text-gray-800 font-medium">
          Are you sure you want to delete this ticket?
        </p>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              // Close toast without deleting
              toast.dismiss(t.id);
            }}
            className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              const filtered = tickets.filter((ticket) => ticket.id !== id);
              saveTickets(filtered);
              toast.dismiss(t.id); // Close confirmation toast
              toast.success("Ticket deleted"); // Show success message
            }}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6 max-w-[1440px] mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Ticket Management
        </h1>

        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4 border"
        >
          <input
            type="text"
            placeholder="Ticket Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Ticket Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {editingTicket ? "Update Ticket" : "Create Ticket"}
          </button>
        </form>

        {/* TICKET GRID SECTION */}
        {tickets.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-lg shadow border"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {ticket.title}
                </h3>
                <p className="text-gray-600 mt-1">{ticket.description}</p>

                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                    ticket.status === "Closed"
                      ? "bg-green-100 text-green-700"
                      : ticket.status === "In Progress"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {ticket.status}
                </span>

                <div className="mt-3 space-x-3">
                  <button
                    onClick={() => handleEdit(ticket)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ticket.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No tickets yet — create your first one!
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Tickets;
