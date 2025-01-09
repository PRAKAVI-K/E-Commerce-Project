import { useState } from "react";
import "./Login.css";
import { withFormHandling } from "./withFormHandling";
import PropTypes from "prop-types";
const SignUp = ({ onButtonClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formSubmission = (e) => {
    e.preventDefault();
    setError("");

    // Validation for empty fields
    if (!name || !email || !phNo || !password) {
      setError("All fields are required.");
      return;
    }

    // Retrieve existing users safely
    const existingUsers = (() => {
      try {
        const data = JSON.parse(localStorage.getItem("userData"));
        return Array.isArray(data) ? data : [];
      } catch {
        return [];
      }
    })();

    // Check if user already exists (email or phone number is unique)
    const userExist = existingUsers.some(
      (userData) => userData.email === email || userData.phNo === phNo
    );
    if (userExist) {
      setError("A user with this email or phone number already exists.");
      return;
    }

    // Create new user and update localStorage
    const newUser = { name, email, phNo, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedUsers));

    alert("Sign Up successful!");
    onButtonClick(); // Navigate or trigger an action
  };

  return (
    <div>
      <fieldset>
        <h4>SIGNUP</h4>
        {error && <p className="error">{error}</p>}
        <form onSubmit={formSubmission}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <i className="fa fa-user" aria-hidden="true"></i>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail ID"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address (e.g., example@example.com)."
            required
          />
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input
            type="text"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            placeholder="Phone No"
            required
          />
          <i className="fa fa-phone-square" aria-hidden="true"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (@$!%*?&), and must be at least 8 characters long."
            required
          />
          <i className="fa fa-unlock-alt" aria-hidden="true"></i>
          <button className="buttonl" type="submit">
            Sign Up
          </button>
        </form>
      </fieldset>
    </div>
  );
};
SignUp.propTypes = {
  onButtonClick: PropTypes.func.isRequired, // Validate onButtonClick as a required function
};
export default withFormHandling(SignUp);
