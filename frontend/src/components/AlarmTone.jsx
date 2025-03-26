import React from "react";

const AlarmTone = ({ toneName, description, audioFile }) => {
  return (
    <div className="alarm-tone border p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold">{toneName}</h3>
      <p className="text-gray-600">{description}</p>
      <audio controls className="mt-2">
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AlarmTone;
