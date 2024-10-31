// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to CodeHub</h1>
      <p>Your ultimate platform to practice coding problems, track your progress, and compete with others!</p>
      
      <div className="home-links">
        <Link to="/problems" className="home-link">Browse Problems</Link>
      </div>
    </div>
  );
}

export default Home;
