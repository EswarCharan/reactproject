// src/pages/Problems.js

/*import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Problems() {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await fetch('http://your-api-url.com/api/problems'); // Replace with actual API URL
      const data = await response.json();
      setProblems(data);
    } catch (error) {
      console.error("Error fetching problems:", error);
    }
  };

  const handleProblemClick = (id) => {
    navigate(`/problems/${id}`);
  };

  return (
    <div>
      <h1>Problems</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id} onClick={() => handleProblemClick(problem.id)}>
            {problem.title} - {problem.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problems;
*/
// src/pages/Problems.js
import React, { useEffect, useState } from 'react';

function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/problems');
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      <h1>Problems</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <a href={`/problems/${problem.id}`}>{problem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problems;
