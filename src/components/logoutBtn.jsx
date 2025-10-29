const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-tranparent text-red-500 border-2 border-red-500 px-5 py-1 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transition duration-400 ease-in-out"
    >
      Logout
    </button>
  );
};

export default Logout;
