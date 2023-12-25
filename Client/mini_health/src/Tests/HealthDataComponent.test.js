import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HealthDataComponent from '../Components/HealthDataComponent';

// Mocking Axios to simulate API calls
jest.mock('axios');

describe('HealthDataComponent', () => {
  test('renders health data table', async () => {
    // Mock health data
    const mockHealthData = [
      { id: 1, submissionDate: '2023-01-01', activityCalories: 200, heartRate: 75 },
      { id: 2, submissionDate: '2023-01-02', activityCalories: 300, heartRate: 80 },
    ];

    // Mock Axios response
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockHealthData),
    });

    // Render the component
    render(<HealthDataComponent />);

    // Wait for the component to load data
    const healthDataTable = await screen.findByRole('table');

    // Check if the table is rendered
    expect(healthDataTable).toBeInTheDocument();

    // Check if the table headers are present
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Activity Calories')).toBeInTheDocument();
    expect(screen.getByText('Heart Rate')).toBeInTheDocument();

    // Check if the mocked health data is rendered in the table
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();

    expect(screen.getByText('2023-01-02')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
  });
});
