/*
This component can be a simple form for users to sign in to your web app. 
It can include fields for email and password, as well as a submit button.
*/
import { useState } from 'react';
import Buttons from '../Reusable/Buttons';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseApp } from './firebase';

function SignIn () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const auth = getAuth(firebaseApp);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      
        try {
          await signInWithEmailAndPassword(auth, email, password);
          //handle succesful sign-in
        } catch (error) {
          // handle sign-in failure
          setErrorMessage(error.message);
        }
      };
  

    return (
     <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange}/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
          </div>
      <Buttons type="submit">Sign In</Buttons>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default SignIn;



/*
Step 2: Create a Sign-In Component
Create a new component called SignIn that will handle the sign-in functionality. This component will have a form with two input fields (one for the email and one for the password) and a submit button. When the user submits the form, we'll call a function that will handle the sign-in logic.

Step 3: Create State Variables
Create two state variables for the email and password fields. We can use the useState hook to create these variables. This will allow us to store the input from the user.

Step 4: Handle Form Input
Add onChange handlers to the email and password input fields. These handlers will update the state variables created in Step 3 as the user types.

Step 5: Handle Form Submission
Add an onSubmit handler to the form. This handler will prevent the default form submission and call a function to handle the sign-in logic. We can use the fetch API or any other tool of your choice to make an API call to the server and verify the user's credentials.

Step 6: Display Error Messages
If the sign-in fails, we can display an error message to the user. We can create another state variable for the error message and update it accordingly.
*/