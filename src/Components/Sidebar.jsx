import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineHome, HiOutlineTruck, HiOutlineLogout } from "react-icons/hi";

import WelcomeCard from "../Components/Dashboard/Welcome";
import ShippingList from "../Components/Dashboard/ShippingList";

const Sidebar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigateTo("/login");
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      content: <WelcomeCard />,
      icon: <HiOutlineHome className="w-6 h-6" />,
    },
    {
      label: "Shipping Comps",
      path: "/dashboard/shipping",
      content: <ShippingList />,
      icon: <HiOutlineTruck className="w-6 h-6" />,
    },
    {
      label: "Logout",
      path: "/logout",
      content: null,
      icon: <HiOutlineLogout className="w-6 h-6" />,
      onClick: handleLogout,
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const currentMenuItem = menuItems.find(
      (item) => item.path === location.pathname
    );

    if (currentMenuItem) {
      setActiveMenuItem(currentMenuItem.content);
    }
  }, [location.pathname]);

  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {menuItems.map((item) => (
                <li key={item.path}>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className={`flex items-center p-2 space-x-3 rounded-md ${
                        item.path === location.pathname
                          ? "text-indigo-500 font-semibold"
                          : "text-gray-700 hover:text-gray-600"
                      } transition duration-300`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center p-2 space-x-3 rounded-md ${
                        item.path === location.pathname
                          ? "text-indigo-500 font-semibold"
                          : "text-gray-700 hover:text-gray-600"
                      } transition duration-300`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-6">{activeMenuItem}</div>
    </div>
  );
};

export default Sidebar;
