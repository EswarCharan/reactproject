// src/App.js

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Problems from './pages/Problems'; // Ensure the path is correct
import ProblemDetails from './pages/ProblemDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/problems/:id" element={<ProblemDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Problems from './pages/Problems';
import ProblemDetails from './pages/ProblemDetails';
import AddProblem from './pages/AddProblem'; // Assuming you have this component
import Home from './pages/Home'; // Assuming you have this component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:id" element={<ProblemDetails />} />
          <Route path="/add-problem" element={<AddProblem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
