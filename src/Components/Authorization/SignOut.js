/* 
Similar to the SignIn component, this component can be a form for users to sign up for your web app. 
It can include fields for name, email, password, and any other relevant information you'd like to collect from new users.
*/
import { useState } from 'react';
import Buttons from '../Reusable/Buttons';

function SignOut() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignOut = async () => {
        try {
            const response = await fetch('/api/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Handles a successful sign-out
            } else {
                //Handles a sign-out failure
                setErrorMessage('Error signing out');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('An error occurred');
        }
    };

    return (
        <div>
            <Buttons onClick={handleSignOut}>Sign out</Buttons>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default SignOut;

/*1.import { useState } from 'react'; This line imports the useState hook from the React library, which allows us to define state variables in our functional components.

2.import Buttons from '../Reusable/Buttons'; This line imports a reusable Buttons component that we can use to render our "Sign out" button.

3.const [errorMessage, setErrorMessage] = useState(''); This line defines a state variable called errorMessage and initializes it with an empty string. We can update this variable later if an error occurs during the sign-out process.

4.const handleSignOut = async () => { ... } This defines a function called handleSignOut that will be called when the "Sign out" button is clicked. The async keyword indicates that this function contains asynchronous code that may take some time to complete.

5.try { ... } catch (err) { ... } This code block contains our sign-out logic. We use a try-catch block to handle any errors that may occur during the sign-out process.

6.const response = await fetch('/api/signout', { ... } This line makes an HTTP POST request to the /api/signout endpoint on our server. We use the fetch function to make the request, and we include an object that specifies the request method (POST) and headers (Content-Type: application/json).

7.if (response.ok) { ... } else { ... } This code block handles the response from the server. If the response status code is between 200 and 299, we assume that the sign-out was successful and don't need to do anything. If the status code is outside that range, we assume that the sign-out failed and update the errorMessage state variable accordingly.

8.return ( ... ) This code block defines what our component will render. It includes a "Sign out" button that will call the handleSignOut function when clicked, as well as an error message that will be displayed if the sign-out fails.

*/
