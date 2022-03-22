import 'chart.js/auto';
import React from "react";
import { Pie } from "react-chartjs-2";
import { DataProps } from './Types';

const PieCustom = ({testData}: {testData:DataProps}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  const pieData = {
    labels: ["1회제공량", "탄수화물", "단백질", "지방", "당류", "나트륨"],
    datasets: [
      {
        data: testData.testData,
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