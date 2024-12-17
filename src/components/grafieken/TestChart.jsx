import React from "react";
import { Line } from "react-chartjs-2";

const TestChart = () => (
  <Line
    data={{
      labels: ["January", "February", "March"],
      datasets: [{ label: "Test Data", data: [65, 59, 80] }],
    }}
  />
);

export default TestChart;