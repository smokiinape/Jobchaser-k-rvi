import React, { useState } from 'react';
import Buttons from '../Reusable/Buttons';
import SearchBar from '../Reusable/SearchBar';
import '../../App.css';
import KiwiLogo from '../images/kiwi.png';
import SignIn from '../Authorization/SignIn';
import GetJobData from '../Jobs/GetJobData';
import SignUpForm from '../Authorization/SignUp';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/AuthSlice'

function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const user = useSelector(selectUser);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    //Gör sökningen här, dvs calla en API eller filtrera en lista
    
  };
  
  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  const handleSignupClose = () => {
    setShowSignUp(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={KiwiLogo} alt="Kiwi logo" />
        </div>
        <div className="login">
          <button tabIndex="0" onClick={() => setShowSignIn(true)}>Log In</button>
          {loggedIn && user && <button tabIndex="0">My Pages</button>}
        </div>
        {showSignIn && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleSignInClose}>
                &times;
              </span>
              <SignIn />
              <p>
                Don't have an account? <a href="#" onClick={() => setShowSignUp(true)}>Sign up for an account</a>
              </p>
            </div>
          </div>
        )}
        {showSignUp && ( 
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleSignupClose}>
                &times;                        
              </span>
              <SignUpForm />
        </div>
      </div>
    )}
  </nav>
</header>
);
}

export default Header;