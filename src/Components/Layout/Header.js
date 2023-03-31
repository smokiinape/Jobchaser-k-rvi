import React, { useState } from 'react';
import Buttons from '../Reusable/Buttons';
import SearchBar from '../Reusable/SearchBar';
import '../../App.css';
import KiwiLogo from '../images/kiwi.png';
import SignIn from '../Authorization/SignIn';
import GetJobData from '../Jobs/GetJobData';
import SignUpForm from '../Authorization/SignUp';


function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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
          <img src={KiwiLogo} alt="Kiwi Logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">hej</a>
            </li>
            <li>
              <a href="#">hej</a>
            </li>
            <li>
              <a href="#">hej</a>
            </li>
          </ul>
        </div>
        <SearchBar onSearch={handleSearch} />
        <div className="login">
          <Buttons onClick={() => setShowSignIn(true)}>Log In</Buttons>
        </div>
        <div className="hamburger-menu">
          <Buttons>Menu</Buttons>
        </div>
        {showSignIn && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleSignInClose}>
                &times;
              </span>
              <SignIn />
              <p>
                Don't have an account? <a href="#" onClick={() => setShowSignUp(true)}>Sign up</a>
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



/* Chatgpt förklarar hur man kan använda search baren här:

const Header = () => {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    /* Perform the search here, e.g. call an API or filter a list
  };

  return (
    <header>
      { *Other header elements* }
      <SearchBar onSearch={handleSearch} />
    </header>
  );
}; */
