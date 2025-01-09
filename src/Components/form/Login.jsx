import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withFormHandling } from './withFormHandling';

const Login = ({ onButtonClick }) => {
  const [email, setEmail] = useState('');
  const [phNo, setPhNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formSubmission = (e) => {
    e.preventDefault();

    setError('');
    if (!email || !password || !phNo) {
      setError('Please enter email, phone number, and password.');
      return;
    }

    // Simulate login validation
    if (email != '' && password != '') {
      alert('Login successful!');
      onButtonClick(); // Trigger navigation via the HOC
    } else {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div>
      <fieldset>
        <h4>LOGIN</h4>
        {error && <p className="error">{error}</p>}
        <form onSubmit={formSubmission} className='form'>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail ID" 
          /><i  className="fa fa-envelope" aria-hidden="true"></i>
          <input
            type="text"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            placeholder="Phone No"
          /><i  className="fa fa-phone-square" aria-hidden="true"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          /><i  className="fa fa-unlock-alt" aria-hidden="true"></i>
          <button className="buttonl" type="submit">
            Login
          </button>
          <span>
            <Link to="/SignUp">Sign Up</Link>
          </span>
        </form>
      </fieldset>
    </div>
  );
};
Login.propTypes = {
  onButtonClick: PropTypes.func.isRequired, // Validate onButtonClick as a required function
};
export default withFormHandling(Login);
