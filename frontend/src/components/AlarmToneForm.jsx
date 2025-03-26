import React, { useState } from "react";

const AlarmToneForm = ({ onAddTone }) => {
  const [toneName, setToneName] = useState("");
  const [description, setDescription] = useState("");
  const [audioFile, setAudioFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!toneName || !description || !audioFile) return alert("All fields are required!");

    const newTone = { toneName, description, audioFile };
    
    try {
      const response = await fetch("http://localhost:3001/api/tones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTone),
      });

      if (!response.ok) throw new Error("Failed to add tone");
      
      onAddTone(newTone);
      setToneName("");
      setDescription("");
      setAudioFile("");
    } catch (error) {
      console.error("Error adding tone:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Add New Alarm Tone</h2>
      <input
        type="text"
        placeholder="Tone Name"
        value={toneName}
        onChange={(e) => setToneName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Audio File URL"
        value={audioFile}
        onChange={(e) => setAudioFile(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
        Add Tone
      </button>
    </form>
  );
};

export default AlarmToneForm;
