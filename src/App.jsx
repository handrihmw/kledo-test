import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import LoginForm from "./Components/Loginform";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Sidebar />
      <Routes>
        <Route
          exact
          path="/login"
          element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
