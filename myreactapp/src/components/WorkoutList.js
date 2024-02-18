import React, { useEffect, useState } from 'react';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]); // State to store the workouts

  useEffect(() => {
    // Function to fetch workouts from the backend
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:8000/');
      const data = await response.json();
      setWorkouts(data); // Update the state with the fetched workouts
    };

    fetchWorkouts(); // Call the fetch function when the component mounts
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>{workout.day} - {workout.workout_type}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
