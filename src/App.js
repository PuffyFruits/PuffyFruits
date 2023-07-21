import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='PuffyFruits' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='auth' element={<AuthDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
