// src/pages/AddProblem.js
/*import React, { useState } from 'react';

function AddProblem() {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProblem = { id: Date.now().toString(), title, difficulty, description };

    try {
      const response = await fetch('http://localhost:5000/api/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProblem),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Problem added:", data); // Log the added problem
      // Optionally reset form fields or handle success
      setTitle('');
      setDifficulty('');
      setDescription('');
    } catch (error) {
      console.error("Error adding problem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Problem</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Difficulty:
        <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </label>
      <button type="submit">Add Problem</button>
    </form>
  );
}

export default AddProblem;
*/
// src/pages/AddProblem.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProblem() {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProblem = {
      id: Date.now().toString(), // Unique ID for the problem
      title,
      difficulty,
      description,
    };

    try {
      const response = await fetch('http://localhost:5000/api/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProblem),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Problem added:", data);
      
      // Navigate to the ProblemDetails page for the newly added problem
      navigate(`/problems/${newProblem.id}`);

      // Optionally reset form fields
      setTitle('');
      setDifficulty('');
      setDescription('');
    } catch (error) {
      console.error("Error adding problem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Problem</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Difficulty:
        <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </label>
      <button type="submit">Add Problem</button>
    </form>
  );
}

export default AddProblem;
