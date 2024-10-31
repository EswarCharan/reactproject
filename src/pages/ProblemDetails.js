// src/pages/ProblemDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import './ProblemDetails.css';

function ProblemDetails() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('// Start coding here...');

  useEffect(() => {
    fetchProblem();
  }, [id]);

  const fetchProblem = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/problems/${id}`);
      
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Check if the data returned contains an error message
      if (data.message) {
        console.error(data.message);
        setProblem(null); // Clear the problem if not found
      } else {
        setProblem(data);
      }
    } catch (error) {
      console.error("Error fetching problem:", error);
    }
  };
  

  return (
    <div className="problem-details-container">
      <div className="problem-info">
        {problem ? (
          <>
            <h2>{problem.title}</h2>
            <p><strong>Difficulty:</strong> {problem.difficulty}</p>
            <p>{problem.description}</p>
          </>
        ) : (
          <p>Loading problem...</p>
        )}
      </div>

      <div className="code-editor">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />
      </div>
    </div>
  );
}

export default ProblemDetails;
