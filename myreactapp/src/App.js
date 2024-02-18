import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '.components/Login';
import Workouts from './components/Workouts'; // Your component to display workouts

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/workouts" component={Workouts} />
        {/* Other routes */}
      </div>
    </Router>
  );
}

export default App;
