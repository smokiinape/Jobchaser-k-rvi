import React from 'react';
import Buttons from '../Reusable/Buttons';
import SearchBar from '../Reusable/SearchBar';
import '../../App.css';
import KiwiLogo from '../images/kiwi.png';

function Header() {
    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        //Gör sökningen här, dvs calla en API eller filtrera en lista
    };

    return (
      <header>
        <nav>
          <div className="logo"><img src={KiwiLogo} alt="Kiwi Logo"/></div>
          <div className="nav-links">
            <ul>
              <li><a href="#">hej</a></li>
              <li><a href="#">hej</a></li>
              <li><a href="#">hej</a></li>
            </ul>
          </div>
          <SearchBar onSearch={handleSearch} />
          <div className="login">
            <Buttons>Log In</Buttons>
          </div>
          <div className="hamburger-menu">
            <Buttons>Menu</Buttons>
          </div>
        </nav>
      </header>
    );
  }

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
 

  export default Header;