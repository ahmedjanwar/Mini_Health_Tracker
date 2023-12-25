import React, { useState } from 'react';

const HealthDataInput = ({ onSubmit }) => {
  const [activityCalories, setActivityCalories] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ activityCalories, heartRate });
    setActivityCalories('');
    setHeartRate('');
  };

  return (
    <div>
      <h2>Submit Health Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Activity Calories:
          <input
            type="number"
            value={activityCalories}
            onChange={(e) => setActivityCalories(e.target.value)}
          />
        </label>
        <br />
        <label>
          Heart Rate:
          <input
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthDataInput;
