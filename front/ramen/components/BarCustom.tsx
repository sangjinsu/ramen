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
      console.log(barChartData);
      console.log(barChartData.testData[0]);
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["One", "Recommend", "Average"],
          datasets: [
            {
              label: "라면 성분",
              data: [
                barChartData.testData[0],
                barChartData.testData[1],
                barChartData.testData[2],
              ],
              backgroundColor: [
                "rgba(46, 204, 113, 0.2)",
                "rgba(46, 204, 54, 0.2)",
                "rgba(46, 204, 70, 0.2)",
              ],
              borderColor: "black",
              borderWidth: 1,
            },
            // datasets: [
            //   {
            //     label: "탄수화물",
            //     data: [testData.testData[0]],
            //     backgroundColor: "rgba(46, 204, 113, 0.2)",
            //     borderColor: "black",
            //     borderWidth: 1
            //   },
            //   {
            //     label: "단백질",
            //     data: [testData.testData[1]],
            //     backgroundColor: "rgba(41, 128, 185, 0.2)",
            //     borderColor: "black",
            //     borderWidth: 1
            //   },
            //   {
            //     label: "지방",
            //     data: [testData.testData[2]],
            //     backgroundColor: "rgba(192, 57, 43, 0.2)", // 남자일 때 : rgba(41, 128, 185, 0.2), 여자일 때 : rgba(192, 57, 43, 0.2)
            //     borderColor: "black",
            //     borderWidth: 1
            //   }
            // ]
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
