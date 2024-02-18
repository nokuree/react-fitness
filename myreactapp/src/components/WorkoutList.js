import React, { useEffect, useState } from 'react';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:8000/api/workouts/');
      const data = await response.json();
      setWorkouts(data);
    };

    fetchWorkouts();
  }, []);

  const handleNewWorkout = async (newWorkout) => {
    // Here, implement the logic to send the new workout to the backend.
    // For demonstration, we're just adding it to the current state.
    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);

    // Optionally, send the new workout to the backend and fetch the updated list.
    // await fetch('API_ENDPOINT', { method: 'POST', body: JSON.stringify(newWorkout), headers: { 'Content-Type': 'application/json' } });
    // fetchWorkouts(); // Re-fetch workouts from the backend
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newWorkout = {
      day: formData.get('day'),
      workout: formData.get('workout'),
      is_completed: formData.get('is_completed') === 'on'
    };
    handleNewWorkout(newWorkout);
    event.target.reset(); // Optional: Reset the form fields after submission
  };

  return (
    <div>
      <h1>Workouts</h1>
      <form onSubmit={handleSubmit}>
        <input name="day" type="text" placeholder="Day" required />
        <input name="workout" type="text" placeholder="Workout Type" required />
        <label>
          Completed:
          <input name="is_completed" type="checkbox" />
        </label>
        <button type="submit">Add Workout</button>
      </form>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>{workout.day} - {workout.workout} - <label> Completed: <input name="is_completed" type="checkbox" /> </label></li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;

