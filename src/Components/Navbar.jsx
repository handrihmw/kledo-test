import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigateTo("/login");
  };

  return (
    <nav className="bg-indigo-500 px-4 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl italic">
          .KledoApp
        </Link>
        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:font-semibold"
    activeclassname="font-semibold"
  >
    {children}
  </Link>
);

export default Navbar;
