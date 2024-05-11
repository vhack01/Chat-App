import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_LINK } from "../constants";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (email.trim().length <= 0 && password.trim().length <= 0) {
      alert("Enter username and password");
      return;
    }
    sendSigninData();
  }

  async function sendSigninData() {
    try {
      const response = await axios.post(`${SERVER_LINK}/signin`, {
        email,
        password,
      });
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        if (!response.data.token) {
          alert("Login Failed, Try again ");
        } else {
          localStorage.setItem(
            "chat-token",
            JSON.stringify(response?.data?.token)
          );
          navigate("/home");
        }
      }
    } catch (err) {
      alert("Login Failed, Try again ");
    }
  }

  return (
    <div className="wrapper signIn">
      <div className="form">
        <div className="heading">LOGIN</div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter you mail"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Submit
          </button>
        </form>
        <p>
          Dont have an account ? <Link to="/signup"> Sign Up </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
