import React, { useState } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import TableUser from "./Table";

// Import your AddModal component here
import AddModal from "../Modals/Add";

const ShippingList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddUser = () => {
    setIsAddModalOpen(true);
  };

  const confirmAddUser = () => {
    setIsAddModalOpen(false);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const users = [
    { id: 1, nama: "John Doe" },
    { id: 2, nama: "Alice Smith" },
    { id: 3, nama: "Bob Johnson" },
  ];

  return (
    <>
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-3 items-center content-center">
          <h1 className="text-xl font-semibold">Shipping Comps</h1>
          
          <button
            onClick={() => handleAddUser()}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 flex items-center justify-center"
          >
            <HiOutlineUserAdd />
          </button>
        </div>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-full w-full"
          />
        </div>
      </div>
      <TableUser />

      <AddModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onAdd={confirmAddUser}
      />
    </>
  );
};

export default ShippingList;
