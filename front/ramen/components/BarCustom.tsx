import React from "react";
import { Chart } from "chart.js";
import { useRef } from "react";
import { DataProps } from "./Types";

const BarCustom = ({ barChartData }: { barChartData: DataProps }) => {
  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    else {
      chartRef.current?.destroy();
    }

    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["현재", "평균", "1일 권장량"],
          datasets: [
            {
              label: "라면 성분",
              data: [
                barChartData.data[0],
                barChartData.data[1],
                barChartData.data[2],
              ],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(46, 204, 70, 0.2)",
              ],
              borderColor: "black",
              borderWidth: 0,
              barThickness: 30,
            },
          ],
        },

        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
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

export default BarCustom;
