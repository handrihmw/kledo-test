import React from "react";

const ProfileCard = ({ users }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-white font-semibold w-[800px] rounded-xl shadow-lg p-10 max-w-xl">
        <img
          className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="user"
        />
        <div className="mt-5">
          <div className="flex items-center gap-5 mb-3">
            <p className="text-md font-semibold">Name</p>
            <p className="text-sm font-normal">: {users.name || "John Doe"}</p>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <p className="text-md font-semibold">Address</p>
            <p className="text-sm font-normal">
              : {users.address || "123 Main St"}
            </p>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <p className="text-md font-semibold">Phone Number</p>
            <p className="text-sm font-normal">
              : {users.phoneNumber || "555-555-5555"}
            </p>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <p className="text-md font-semibold">Email</p>
            <p className="text-sm font-normal">
              : {users.email || "john@example.com"}
            </p>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <p className="text-md font-semibold">Motto</p>
            <p className="text-sm font-normal">
              : {users.motto || "Lorem ipsum dolor sit amet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
