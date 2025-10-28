const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-5 py-2 my-8 rounded hover:bg-red-600 cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;
