import React, {useState} from 'react';
import Buttons from './Buttons';
import '../../App.css';



const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
            type="text"
            placeholder="Search for jobs"
            value={searchTerm}
            onChange={handleChange}
            className="search-input"
        />
        <Buttons type="submit" className="search-button">
            Search
        </Buttons>
        </form>
    );

    
};

export default SearchBar;

/*
import React, { useState } from 'react';
We're importing the React module and the useState hook from the 'react' package.

const SearchBar = ({ onSearch }) => {
We're defining a functional component called SearchBar. It takes a prop called onSearch, which is a function that will be executed when the user submits the search.

  const [searchTerm, setSearchTerm] = useState('');
We're using the useState hook to create a state variable called searchTerm and a function to update it, called setSearchTerm. The initial value of searchTerm is an empty string.

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
We're defining a function called handleChange. This function takes an event object as its argument and updates the searchTerm state variable with the current value of the input field (accessible via event.target.value).

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  We're defining another function called handleSubmit. This function takes an event object as its argument, prevents the default form submission behavior (with event.preventDefault()), and then calls the onSearch prop function, passing the current searchTerm as an argument.

    return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for jobs"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
We're returning the JSX to be rendered for the SearchBar component. It consists of a form element with an onSubmit prop that is assigned the handleSubmit function. Inside the form, there's an input element of type text and a button element of type submit.
The input element has several attributes:
placeholder: A string that provides a hint to the user about what they should enter.
value: The current value of the input field, which is the searchTerm state variable.
onChange: An event handler that listens for changes in the input field and calls the handleChange function when a change occurs.
className: A string that assigns CSS classes to the input field for styling purposes.
The button element has a type attribute set to "submit" and a className attribute for styling.

export default SearchBar;
Finally, we're exporting the SearchBar component as the default export, so it can be imported and used in other parts of the application.


*/