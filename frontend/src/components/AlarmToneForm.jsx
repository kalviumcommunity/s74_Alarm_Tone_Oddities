// src/components/AlarmToneForm.jsx
import React, { useState, useEffect } from "react";

const AlarmToneForm = ({ onAddTone }) => {
  const [toneName, setToneName] = useState("");
  const [description, setDescription] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const [users, setUsers] = useState([]);
  const [createdBy, setCreatedBy] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!toneName || !description || !audioFile || !createdBy) {
      alert("All fields are required!");
      return;
    }

    const newTone = { toneName, description, audioFile, created_by: createdBy };

    try {
      const response = await fetch("http://localhost:3001/api/tones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTone),
      });

      if (!response.ok) throw new Error("Failed to add tone");

      const savedTone = await response.json();
      onAddTone(savedTone);
      setToneName("");
      setDescription("");
      setAudioFile("");
      setCreatedBy("");
    } catch (error) {
      console.error("Error adding tone:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Alarm Tone</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Tone Name</label>
        <input
          type="text"
          value={toneName}
          onChange={(e) => setToneName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Audio File URL</label>
        <input
          type="text"
          value={audioFile}
          onChange={(e) => setAudioFile(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Created By</label>
        <select
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Tone
      </button>
    </form>
  );
};

export default AlarmToneForm;
