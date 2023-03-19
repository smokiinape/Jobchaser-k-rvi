import React from 'react';
import './Buttons.css';

const Buttons = ({ children, onClick, className = '', disabled = false, type = 'button' }) => {
    return (
        <button 
          type={type}
          className={`button ${className}`}
          onClick={onClick}
          disabled={disabled}
          >
            {children}
        </button>
    );
};

export default Buttons;

/*

const Button: We're declaring a constant variable called Button that will hold our component.

({ children, onClick, className = '', disabled = false, type = 'button' }) =>: We're using a functional component with destructuring to define the component's props. The component accepts the following props:
children: The content to be displayed inside the button.

onClick: A callback function to be executed when the button is clicked.

className: An optional CSS class name to be applied to the button.

disabled: A boolean value that determines whether the button should be disabled or not. By default, it is set to false.

type: The type attribute for the button element. By default, it is set to 'button'.

<button>: This is the button HTML element we're rendering as part of the component.

type={type}: We're setting the button's type attribute to the value of the type prop.

className={button ${className}}: We're setting the button's className attribute. It will have the class 'button' and any additional classes passed through the className prop.

onClick={onClick}: We're setting the button's onClick event handler to the value of the onClick prop.

disabled={disabled}: We're setting the button's disabled attribute to the value of the disabled prop.

{children}: We're rendering the value of the children prop inside the button element.

export default Button;: We're exporting the Button component so it can be used in other parts of the application.

*/

// Exempel på hur komponenten kan användas:

/* 
ExampleComponent.jsx:

import React from 'react';
import Button from './Button';

const ExampleComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Example Component</h1>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default ExampleComponent;

************************************************** Förklaring below

import React from 'react';
import Button from './Button';
The first two lines import the required modules: 
React from the 'react' package and Button component from the local Button file.

const ExampleComponent = () => {
We're defining a functional component called ExampleComponent.

  const handleClick = () => {
    console.log('Button clicked!');
  };
Inside ExampleComponent, we're defining a function called handleClick. This function logs the message 'Button clicked!' to the console when executed.


  return (
    <div>
      <h1>Example Component</h1>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};
We're returning the JSX to be rendered for the ExampleComponent. It consists of a div that contains an h1 element with the text 'Example Component' and a Button component.
The Button component has an onClick prop which is assigned the handleClick function. This means that when the button is clicked, the handleClick function will be executed.
The text 'Click me!' is passed as the children prop to the Button component, which will be displayed as the button's label.


export default ExampleComponent;
Finally, we're exporting ExampleComponent as the default export, so it can be imported and used in other parts of the application.

*/