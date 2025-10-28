import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    // Retrieve existing users
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError("User already exists. Please login.");
      toast.error("User already exists. Please login.");
      return;
    }

    // Add new user
    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("ticketapp_users", JSON.stringify(users));

    toast.success("Signup successful! Redirecting to login...");

    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Sign Up
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full name */}

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded p-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded p-2 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-600"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border rounded p-2 pr-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-gray-600"
            >
              {showConfirmPassword ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
