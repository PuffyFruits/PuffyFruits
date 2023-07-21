import React, { useState } from 'react';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      {
        currentForm === "login" ? <SignIn onFormSwitch={toggleForm}/> : currentForm === "register" ? <SignUp onFormSwitch={toggleForm}/> : <AuthDetails onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
