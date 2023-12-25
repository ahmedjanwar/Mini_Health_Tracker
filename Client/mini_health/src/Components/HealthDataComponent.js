import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const HealthDataComponent = () => {
  const [healthData, setHealthData] = useState([]);
  const [newData, setNewData] = useState({
    activityCalories: 0,
    heartRate: 0,
  });

  useEffect(() => {
    // Fetch health data from the server
    fetchHealthData();
  }, []);

  const fetchHealthData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/healthdata/all');
      setHealthData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewData = async () => {
    try {
      await axios.post('http://localhost:8080/api/healthdata/submit', newData);
      // Refresh health data after adding a new entry
      fetchHealthData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div style={{ float: 'left', width: '50%' }}>
        <h2>Add New Health Data</h2>
        <div className="field">
          <label>Activity Calories:</label>
          <input
            type="number"
            value={newData.activityCalories}
            onChange={(e) => setNewData({ ...newData, activityCalories: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Heart Rate:</label>
          <input
            type="number"
            value={newData.heartRate}
            onChange={(e) => setNewData({ ...newData, heartRate: e.target.value })}
          />
        </div>
        <button onClick={addNewData}>Add Data</button>
      </div>

      <div style={{ float: 'right', width: '50%' }}>
        <h2>Health Data Chart</h2>
        <XYPlot width={400} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Date" tickFormat={(v) => new Date(v).toLocaleDateString()} />
          <YAxis title="Activity Calories" />
          <LineSeries
            data={healthData.map(entry => ({
              x: new Date(entry.submissionDate), 
              y: entry.activityCalories
            }))}
          />
        </XYPlot>
      </div>

      <div style={{ clear: 'both' }}>
        <h2>Health Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity Calories</th>
              <th>Heart Rate</th>
            </tr>
          </thead>
          <tbody>
            {healthData.map((entry) => (
              <tr key={entry.id}>
                <td>{new Date(entry.submissionDate).toLocaleDateString()}</td>
                <td>{entry.activityCalories}</td>
                <td>{entry.heartRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthDataComponent;
