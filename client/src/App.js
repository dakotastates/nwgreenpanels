import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector} from 'react-redux'

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import './App.css';



function App() {
  const { user } = useSelector(state => state.user)
  

  return (
    <>
    <Router>
    {user ? 
      <div className='App'>
          <Routes>
            <Route path='/' element={<><HomePage/></>} />
            <Route path="*" element={<><NotFound/></>}/>
          </Routes>
      </div>
      : 
      <div className='app__auth-page'>
        <Routes>
          <Route path='/' element={<><AuthPage /></>} />
          <Route path="*" element={<><NotFound/></>}/>
        </Routes>
      </div>
    }
    </Router>
    </>
  );
}

export default App;
