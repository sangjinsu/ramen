import 'chart.js/auto';
import React from "react";
import { Pie } from "react-chartjs-2";

const PieCustom = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  const pieData = {
    labels: ["Test1", "Test2"],
    datasets: [
      {
        data: [100, 50],
        backgroundColor: ["rgb(232, 189, 125)", "rgb(125, 168, 232)"]
      }
    ]
  };

  return (
    <div>
      <div>
        <Pie data={pieData} options={options} />
      </div>
    </div>
  );
};

export default PieCustom