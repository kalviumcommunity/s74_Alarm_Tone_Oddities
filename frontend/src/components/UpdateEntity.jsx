// src/components/UpdateEntity.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateEntity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ toneName: "", description: "", audioFile: "" });

  useEffect(() => {
    fetch(`/api/tones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched tone for update:", data);
        setFormData(data);
      })
      .catch((err) => console.error("Error fetching tone:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/tones/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Tone updated successfully!");
        navigate("/");
      })
      .catch((err) => console.error("Error updating tone:", err));
  };

  return (
    <div>
      <h2>Update Alarm Tone</h2>
      <form onSubmit={handleSubmit}>
        <input name="toneName" value={formData.toneName} onChange={handleChange} placeholder="Tone Name" required />
        <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input name="audioFile" value={formData.audioFile} onChange={handleChange} placeholder="Audio File URL" required />
        <button type="submit">Update Tone</button>
      </form>
    </div>
  );
};

export default UpdateEntity;
