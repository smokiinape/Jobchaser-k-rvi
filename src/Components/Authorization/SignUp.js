import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser, setError as setAuthError, clearError } from '../../store/slices/AuthSlice';


const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      window.alert('Password should be at least 6 characters');
      return;
    }


    if (!email) {
      window.alert('Email is required');
      return;
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc1fF9oWMDWiyoAJQZGVJBuywI8zMJfQY', {
        email,
        password,
        returnSecureToken: true,
      });
      const { data } = response;
      dispatch(setUser(data));
      console.log('User signed up:', data);
      setEmail('');
      setPassword('');
      setError('');
      dispatch(clearError());
      window.alert('You have successfully signed up!')
    } catch (error) {
      console.error('Error during sign up:', error);
      console.error('Error response:', error.response);
      console.error('Error data:', error.response.data.error);

      setError(error.message);
      dispatch(setAuthError(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUpForm;
