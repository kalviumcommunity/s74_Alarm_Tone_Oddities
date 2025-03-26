import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AlarmTone from "./components/AlarmTone";
import AlarmToneForm from "./components/AlarmToneForm";
import EntityList from "./components/EntityList";
import UpdateEntity from "./components/UpdateEntity";

const App = () => {
  const [tones, setTones] = useState([]);

  useEffect(() => {

    fetchTones();
  }, []);

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

  const addTone = (newTone) => {
    setTones([...tones, newTone]); // Update UI after adding a tone
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6">
        <LandingPage />
        <AlarmToneForm onAddTone={addTone} />
        <h2 className="text-3xl font-bold text-white text-center my-6">Alarm Tones</h2>
        <ul className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-lg space-y-4">
          {tones.map((tone) => (
            <AlarmTone key={tone._id} {...tone} />
          ))}
        </ul>

        {/* Define Routes Below */}
        <Routes>
          <Route path="/" element={<EntityList />} />
          <Route path="/entities" element={<EntityList />} />
          <Route path="/update/:id" element={<UpdateEntity />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
