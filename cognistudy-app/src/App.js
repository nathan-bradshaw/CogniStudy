import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import MainApp from './MainApp';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    setLoggedIn(true);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <MainApp /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
