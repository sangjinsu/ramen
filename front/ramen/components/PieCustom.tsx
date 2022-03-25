import "chart.js/auto";
import React from "react";
import { Pie } from "react-chartjs-2";
import { DataProps } from "./Types";

const PieCustom = ({ pieChartData }: { pieChartData: DataProps }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };

  const pieData = {
    labels: ["탄수화물", "단백질", "지방"],
    datasets: [
      {
        data: pieChartData.data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };

  return (
    <div>
      <div>
        <Pie data={pieData} options={options} />
      </div>
    </div>
  );
};

export default PieCustom;
