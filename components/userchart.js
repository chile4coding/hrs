import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as Chartjs} from  "chart.js/auto"
import { useState } from "react";



  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Hospital Recommender System", 
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: 0,
        suggestedMax: 30,
      },
    },
  };



export default function Userchart({ chart }) {
  const [userData, setUserData] = useState({
    labels: chart.map((data) => data.month),
    datasets: [
      {
        label: `Appointments ${new Date().getFullYear()}`,
        data: chart.map((data) => data.appointment),
        borderColor: "#0000ff",
        backgroundColor: "#0000ff",
      },

    ],
  });
  return <Line data={userData} options={options} />;
}
