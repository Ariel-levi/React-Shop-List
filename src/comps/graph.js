import React, { useState, useEffect } from "react";
import CanvasJSReact from "../graph/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dataPoints = [
  { x: new Date("2021-01-01"), y: 40 },
  { x: new Date("2021-01-02"), y: 50 },
  { x: new Date("2021-01-03"), y: 60 },
  { x: new Date("2021-01-04"), y: 45 },
];

function Graph(props) {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = `/stocks_jsons/2022-04-03_aapl.json`;
    let resp = await fetch(url);
    let data = await resp.json();
    let temp_ar = data.results.map((item) => {
      return { x: new Date(item.t), y: item.c };
    });
    console.log(temp_ar);
    setAr(temp_ar);
  };

  const options = {
    theme: "light2",
    title: {
      text: "Stock Price of NIFTY 50",
    },
    axisY: {
      title: "Price in USD",
      prefix: "$",
      includeZero: false,
    },
    data: [
      {
        type: "line",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.00",
        dataPoints: ar,
      },
    ],
  };

  return (
    <div className="container">
      <h2>Test graph:</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Graph;
