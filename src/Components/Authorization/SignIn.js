import React, { useState, useEffect} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Authorization/firebase';
import { useDispatch } from 'react-redux';
import { setUser, setError as setAuthError, clearError } from '../../store/slices/AuthSlice';
import axios from 'axios';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      setIsLoggedIn(true); 
      window.alert('You have succesfully signed in!')
    } catch (error) {
      console.error('Error during sign in:', error);
      setError(error.message);
      dispatch(setAuthError(error.message));
    }
  };

  useEffect(() => {
    // Lyssna på förändringar i isLoggedIn och omdirigera användaren till sin profil
    if (isLoggedIn) {
      window.location.href = '/profil'; // Ersätt med URL:n för användarens profil
    }
  }, [isLoggedIn]);


  return (
    <form className="singIn-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email:</label>
        <input id="login-email"type="text" value={email} onChange={handleEmailChange} />
        <label htmlFor="login-password">Password:</label>
        <input id="login-password" type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SignIn;
