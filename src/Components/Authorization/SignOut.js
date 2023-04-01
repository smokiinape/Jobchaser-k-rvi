import React from 'react';
import { auth } from '../Authorization/firebase';
import { signOut } from 'firebase/auth';
import Buttons from '../Reusable/Buttons';
import { useDispatch } from 'react-redux';
import { setUser, setError as setAuthError, clearError } from '../../store/slices/AuthSlice';

function SignOut() {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
      dispatch(clearError());
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
      dispatch(setAuthError(error.message));
    }
  };

  return (
    <div>
      <Buttons onClick={handleSignOut}>Sign out</Buttons>
    </div>
  );
}

export default SignOut;
