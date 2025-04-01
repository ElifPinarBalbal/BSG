import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.data.token) {
        alert("Login successful!");
        setLoggedInEmail(email); // ✅ store email to show on screen
        setError(""); // Clear error if previously failed
      }
    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
      setLoggedInEmail(""); // Clear any previous success
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>

      {/* 👇 Display Results */}
      {loggedInEmail && (
        <p style={{ color: "green" }}>Logged in as: {loggedInEmail}</p>
      )}

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
}

export default Login;
