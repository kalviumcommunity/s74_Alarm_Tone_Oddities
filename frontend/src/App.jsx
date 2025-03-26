import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import AlarmTone from "./components/AlarmTone";
import AlarmToneForm from "./components/AlarmToneForm";

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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6">
      <LandingPage />
      <AlarmToneForm onAddTone={addTone} />
      <h2 className="text-3xl font-bold text-white text-center my-6">Alarm Tones</h2>
      <ul className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-lg space-y-4">
        {tones.map((tone, index) => (
          <AlarmTone key={index} {...tone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
