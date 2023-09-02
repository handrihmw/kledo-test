import React from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-lg mx-auto my-6">
        <div class="bg-white shadow-lg rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <p class="font-bold">Delete your account</p>
            <p class="text-sm text-gray-700 mt-1">
              You will lose all of your data by deleting your account. This
              action cannot be undone.
            </p>
          </div>
          <div class="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              onClick={onDelete}
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
            >
              Delete
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

export default DeleteConfirmationModal;
