import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import DashBoard from './pages/DashBoard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
