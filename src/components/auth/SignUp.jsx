import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from 'react';
import { auth } from '../../firebase';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCreadential) => {
                props.onFormSwitch('login')
            })
            .catch((error) => {
                const errorString = error.toString();
                console.log(errorString);
                switch (errorString) {
                    case "FirebaseError: Firebase: Error (auth/email-already-in-use).":
                        setErr("Email Already Exists")
                        break;
                
                    default:
                        setErr("")
                        break;
                }
            })
    }

    return (
        <div className="sign-up-container">
            <h2>Create Account</h2>
            <form 
                className="signup-form" 
                onSubmit={signUp}
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e) => 
                    setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input
                    type="password" 
                    placeholder='Enter your password' 
                    value={password}
                    onChange={(e) => 
                    setPassword(e.target.value)}/>
                <button type='submit'>Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            <p className="error">{err}</p>
        </div>
    )
}

export default SignUp