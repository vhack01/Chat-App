import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validateSignup from "../utils/validateSignup";
import { SERVER_LINK } from "../constants";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    const isValid = validateSignup({ name, email, password });
    if (!isValid.success) {
      alert("Fill the correct information");
      return;
    }
    sendSignupData();
  }

  async function sendSignupData() {
    try {
      const response = await axios.post(`${SERVER_LINK}/signup`, {
        name,
        email,
        password,
      });
      if (response.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (err) {
      alert("Failed to register, Try again");
    }
  }

  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={(e) => handleSignup(e)}>
            Submit
          </button>
          <h5 className="or">OR</h5>
        </form>
        <p>
          Have an account ? <Link to="/"> Login </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
