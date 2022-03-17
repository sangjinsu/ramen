import React from "react";
import Chart from "chart.js";
import { useRef } from "react";

interface Props {
  chartData: number[];
}

const MyChart = ({ chartData }: Props) => {
  // helper function to format chart data since you do this twice
  const formatData = (data: number[]): Chart.ChartData => ({
    labels: ["a", "b", "c", "d", "e"],
    datasets: [{ data }]
  });

  // use a ref to store the chart instance since it it mutable
  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "radar",
        data: formatData(chartData),
        options: { responsive: true }
      });
    }
  };

  return (
    <div className="self-center w-1/2">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
};

// want to see some changes in the props on order to test MyChart
export default () => {
  const data: number[] = [0, 1, 2, 3];

  return (
    <div>
      <MyChart chartData={data} />
    </div>
  );
};
