import React, { useState } from 'react';


function EventModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("LinkedIn Post");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    if (title) {
      onSave({ title, type, notes });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Communication</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="LinkedIn Post">LinkedIn Post</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
        </select>
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EventModal;
