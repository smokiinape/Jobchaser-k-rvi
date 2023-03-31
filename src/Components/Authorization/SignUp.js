import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log('handleSubmit called')
    event.preventDefault();
    if (password.length < 6) {
      window.alert('Password should be at least 6 characters');
      return;
    }
    

    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc1fF9oWMDWiyoAJQZGVJBuywI8zMJfQY', {
        email,
        password,
        returnSecureToken: true,
      });
      const { data } = response;
      console.log('User signed up:', data);
      setEmail('');
      setPassword('');
      setError('');
      window.alert('You have successfully signed up!')
    } catch (error) {
      console.error('Error during sign up:', error);
      console.error('Error response:', error.response);
      console.error('Error data:', error.response.data.error);

      setError(error.message);
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
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUpForm;
