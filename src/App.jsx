import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Homepage from "./pages/homepage";
import Login from "./pages/(auth)/login";
import Signup from "./pages/(auth)/signup";
import Dashboard from "./pages/dashboard";
import Tickets from "./pages/ticket";
import ProtectedRoute from "./components/protectedRouting";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("ticketapp_session");
  // const navigate = useNavigate();
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Tickets />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
