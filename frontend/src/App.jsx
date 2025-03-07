import React from 'react';
import LandingPage from './components/LandingPage';  // Make sure the path is correct
import AlarmTone from './components/AlarmTone';
import AlarmToneData from './components/AlarmToneData';

const App = () => {
  const dummyData = AlarmToneData();  // Fetch the dummy data from the AlarmToneData component

  return (
    <div>
      {/* Render the Landing Page */}
      <LandingPage />

      {/* Render the AlarmTone components */}
      {dummyData.map((tone, index) => (
        <AlarmTone 
          key={index}
          toneName={tone.toneName}
          description={tone.description}
          audioFile={tone.audioFile}
        />
      ))}
    </div>
  );
};

export default App;
