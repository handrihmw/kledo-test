import React, { useState, useEffect } from 'react';
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { fetchData } from '../../Api';
import DeleteModal from '../Modals/Delete';
import EditModal from '../Modals/Edit';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedValue, setEditedValue] = useState('Initial Value');

  useEffect(() => {
    fetchData()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleEditUser = (userId) => {
    setSelectedUserId(userId);
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = (userId) => {
    setSelectedUserId(userId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteUser = () => {
    console.log(`Delete user with ID: ${selectedUserId}`);
    setIsDeleteModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="container mx-auto py-6">
      <table className="min-w-full bg-white">
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.nama}</td>
              <td className="px-6 py-4 text-right">
                <button
                  className="mr-2 text-indigo-600 hover:text-indigo-800"
                  onClick={() => handleEditUser(user.id)}
                >
                  <HiOutlinePencilAlt />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <HiOutlineTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={confirmDeleteUser}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={(newValue) => {
          setEditedValue(newValue);
          setIsEditModalOpen(false);
        }}
        initialValue={editedValue}
      />
    </div>
  );
};

export default UserTable;
