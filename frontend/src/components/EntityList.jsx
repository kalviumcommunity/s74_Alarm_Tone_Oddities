// src/components/EntityList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch("/api/tones") // Ensure this matches your backend route
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched tones:", data); // Debugging
        setEntities(data);
      })
      .catch((err) => console.error("Error fetching tones:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/tones/${id}`, { method: "DELETE" })
      .then(() => {
        setEntities((prevEntities) => prevEntities.filter((entity) => entity._id !== id));
        alert("Tone deleted successfully!");
      })
      .catch((err) => console.error("Error deleting tone:", err));
  };

  return (
    <div>
      <h1>Alarm Tones</h1>
      {entities.length === 0 && <p>No tones available.</p>}
      {entities.map((tone) => (
        <div key={tone._id} style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
          <p><strong>{tone.toneName}</strong></p>
          <p>{tone.description}</p>
          <audio controls>
            <source src={tone.audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <br />
          <Link to={`/update/${tone._id}`}>
            <button style={{ marginRight: "10px" }}>Edit</button>
          </Link>
          <button onClick={() => handleDelete(tone._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EntityList;
