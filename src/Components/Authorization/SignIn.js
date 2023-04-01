import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Authorization/firebase';
import { useDispatch } from 'react-redux';
import { setUser, setError as setAuthError, clearError } from '../../store/slices/AuthSlice';

function SignIn() {
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
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      dispatch(setUser(user));
      setEmail('');
      setPassword('');
      setError('');
      dispatch(clearError());
      window.alert('You have succesfully signed in!')
    } catch (error) {
      console.error('Error during sign in:', error);
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
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SignIn;
