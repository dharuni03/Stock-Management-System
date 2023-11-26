// App.js or App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dash from './Dash';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          { <Route path="/" element={<Dash />} /> }

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
