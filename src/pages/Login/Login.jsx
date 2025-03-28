import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "test@example.com" && password.trim() === "password") {
      navigate("/home"); // Redirect to /home
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        background: darkMode
          ? "linear-gradient(to right, #3E3E3E, #525252)"
          : "linear-gradient(to right, #FFD3A5, #FD6585)", // Soft peach-pink
        transition: "0.5s ease-in-out",
        color: darkMode ? "#F1F1F1" : "#333",
      }}
    >
      {/* Stylish Title */}
      <h1
        className="fw-bold mb-4"
        style={{
          fontSize: "2.5rem",
          fontFamily: "'Poppins', sans-serif",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          letterSpacing: "1px",
        }}
      >
        Resume <span style={{ color: darkMode ? "#F9A826" : "#D35400" }}>Builder</span>
      </h1>

      {/* Login Card */}
      <div
        className={`card shadow p-4 ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}`}
        style={{
          width: "22rem",
          borderRadius: "15px",
          transition: "0.3s",
          backgroundColor: darkMode ? "#2E2E2E" : "#FFF",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-center flex-grow-1">Login</h2>
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"} btn-sm`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn w-100" style={{ backgroundColor: "#000000", color: "white" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
