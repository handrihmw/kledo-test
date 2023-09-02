import React, { useState } from "react";

const ModalCreateUser = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({ name: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Shipping comps added successfully");
      setFormData({ name: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative max-w-lg mx-auto my-6 w-[400px]">
        <div className="bg-white shadow-lg rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <form onSubmit={handleSubmit}>
            <div className="text-left">
              <p className="font-bold mb-2">Add Shipping Comps</p>
              {successMessage && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                  {successMessage}
                </div>
              )}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-indigo-500`}
                placeholder="Enter Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button
                onClick={onSave}
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-blue-200 text-blue-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateUser;
