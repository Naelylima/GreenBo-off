import React from "react";
import ReactApexChart from "react-apexcharts";
import NavBar from "./nav";

const ChartComponent = () => {
  const options = {
    series: [
      {
        name: "C02/t",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Média mundial",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    chart: {
      height: "auto",
      type: "line",
    },
    responsive: [{
      breakpoint: undefined,
      options: {},
  }],
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "CO2 emissions",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    fill: {
      colors: ["#1670A8"],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Toneladas",
        },
      },
      {
        opposite: true,
        title: {
          text: "Média",
        },
      },
    ],
  };

  return (
   
      <ReactApexChart
        options={options}
        series={options.series}
        type="line"
  
        height={350}
      />
  
  );
};

export default ChartComponent;
