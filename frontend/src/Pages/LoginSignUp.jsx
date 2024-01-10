import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/u/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("isLogin", true);
      localStorage.setItem("username", data.username);
      // alert("Login Successful");
      localStorage.setItem("user", (data._id));
      window.location.href = "/shop";
    } else {
      alert(data.error.message || "Login Failed");
    }
  }

  return (
    <div>
      <div className="login">
        <div className="login-container">
          <h1>Login</h1>

          <form className="boxes" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
          </form>
          <p className="register">
            Register?
            <Link to="/login/SignUp">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
