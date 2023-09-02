import React from "react";

const WelcomeCard = () => {
  return (
    <>
      <div className="flex items-center p-4 mb-8">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          Welcome to Handri,
        </h1>
        <p className="text-lg text-gray-600">
          Your trusted partner in shipping and logistics.
        </p>
      </div>
    </>
  );
};

export default WelcomeCard;
