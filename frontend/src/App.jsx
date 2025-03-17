import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import AlarmTone from "./components/AlarmTone";

const App = () => {
  const [tones, setTones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tones") // ✅ Corrected endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setTones(data))
      .catch(error => console.error("Error fetching tones:", error));
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6">
      <LandingPage />
      <h2 className="text-3xl font-bold text-white text-center mb-6">Alarm Tones</h2>
      <ul className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-lg space-y-4">
        {tones.map((tone, index) => (
          <AlarmTone key={index} {...tone} className="border-b last:border-none p-4 hover:bg-gray-100 rounded-lg" />
        ))}
      </ul>
    </div>
  );
};

export default App;
