import React, { useEffect, useState } from "react";

const EntityList = () => {
  const [tones, setTones] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    fetchTones();
    fetchUsers();
  }, []);

  // Fetch all alarm tones
  const fetchTones = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tones");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setTones(data);
    } catch (error) {
      console.error("Error fetching tones:", error);
    }
  };

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle user selection change
  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  // Filter tones based on the selected user
  const filteredTones = selectedUser
    ? tones.filter((tone) => tone.created_by === selectedUser)
    : tones;

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Alarm Tones</h2>

      {/* User Selection Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Filter by User</label>
        <select
          value={selectedUser}
          onChange={handleUserChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">All Users</option>
          {users.length > 0 ? (
            users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))
          ) : (
            <option disabled>No users available</option>
          )}
        </select>
      </div>

      {/* Display Filtered Alarm Tones */}
      <ul className="space-y-4">
        {filteredTones.length > 0 ? (
          filteredTones.map((tone) => (
            <li key={tone._id} className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-800">{tone.toneName}</h3>
              <p className="text-gray-600">{tone.description}</p>
              <audio controls className="mt-2">
                <source src={tone.audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-500 mt-2">
                Created by: {users.find((user) => user._id === tone.created_by)?.name || "Unknown"}
              </p>
              <div className="mt-2 flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tones available.</p>
        )}
      </ul>
    </div>
  );
};

export default EntityList;
