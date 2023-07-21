import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from 'react';
import { auth } from '../../firebase';

export const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/auth');
            })
            .catch((error) => {
                const errorString = error.toString();
                console.log(errorString)
                switch (errorString) {
                    case "FirebaseError: Firebase: Error (auth/invalid-email).":
                        setErr("Invalid Email")
                        break;
                    case "FirebaseError: Firebase: Error (auth/missing-password).":
                        setErr("Missing Password")
                        break;
                    case "FirebaseError: Firebase: Error (auth/wrong-password).":
                        setErr("Wrong Password")
                        break;
                    case "FirebaseError: Firebase: Error (auth/user-not-found).":
                        setErr("User Not Found")
                        break;
                
                    default:
                        setErr("");
                        break;
                }
            })
    }

    return (
        <div className="sign-in-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={signIn}>
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
                <button type='submit'>Log In</button>
            </form>
            <button className="link-btn" onClick={() => navigate("/signup")}>Don't have an account? Register here.</button>
            <p className="error">{err}</p>
        </div>
    )
}

export default SignIn