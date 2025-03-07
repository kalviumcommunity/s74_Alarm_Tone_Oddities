import React from 'react';

const AlarmTone = ({ toneName, description, audioFile }) => {
  return (
    <div className="alarm-tone">
      <h3>{toneName}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AlarmTone;
