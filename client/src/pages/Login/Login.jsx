import React, { useState } from 'react';
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", { // Corrected to use login endpoint
        username,
        password
      });
      localStorage.setItem("user",JSON.stringify(res.data))
      navigate("/");
      //console.log(res.data); // Handle the response (e.g., save token, redirect user)
    } catch (err) {
      console.log(err);
      setError("Login failed. Please check your credentials."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button disabled={loading} type="submit">Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
        {error && <p className="error">{error}</p>} {/* Display error if exists */}
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
}

export default Login;
