import { useState } from 'react';
import Buttons from '../Reusable/Buttons';

const SignUpForm ()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('sumbitting din email ${email} och din kod ${kod}');
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
                <input type="text" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <Buttons text="Sign Up" />
        </form>
    );
}
export default SignUpForm;