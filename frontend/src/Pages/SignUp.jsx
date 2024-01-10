import { Link } from "react-router-dom";
import "./CSS/SignUp.css";
import { useState } from "react";


function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/u/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password }),
    });
    const data = await response.json();
    if (data.accessToken) {
      alert("Registration Successful");
      window.location.href = "/";
    } else {
      alert(data.error.message);
    }
  }
  return (
    <div>
      <div className="loginSignUp">
        <div className="signUp-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="fields">
            <div className="block">
              <label htmlFor="name"></label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="block">
              <label htmlFor="username"></label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Your Username"
                required
              />
            </div>
            <div className="block">
              <label htmlFor="email"></label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="block">
              <label htmlFor="password"></label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Your Password"
                required
              />
            </div>
            <button type="submit">Continue</button>
          </form>
          <p className="signUp">
            Already have an account?
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
