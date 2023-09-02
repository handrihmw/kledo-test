import React, { useState } from "react";

const EditModal = ({ isOpen, onClose, onSave, initialValue }) => {
  const [editedValue, setEditedValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleSave = () => {
    onSave(editedValue);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative max-w-lg mx-auto my-6 w-[400px]">
        <div class="bg-white shadow-lg rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div class="text-left">
            <p class="font-bold mb-2">Update your account</p>
            <input
              type="text"
              value={editedValue}
              onChange={handleInputChange}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div class="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              onClick={handleSave}
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-indigo-200 text-indigo-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
            >
              Save
            </button>
            <button
              onClick={onClose}
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
            md:mt-0 md:order-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
