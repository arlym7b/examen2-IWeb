import React, { useState }  from 'react';
import MainAppBar from './components/MainAppBar/MainAppBar';
import Pie from './components/common/Pie/Pie';
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  return (
    <GoogleOAuthProvider clientId="889237171145-10klskbip4pvqqjveckhc10m706l0erd.apps.googleusercontent.com">
    <BrowserRouter>
    <MainAppBar login={setUser}/>
      <Routes>
        <Route path="" element={<Main />} />
      </Routes>
    </BrowserRouter>
    <Pie />
  </GoogleOAuthProvider>
  );
}

export default App;
