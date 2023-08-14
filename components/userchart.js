import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as Chartjs} from  "chart.js/auto"
import { useState } from "react";

export const userData1 = [
  {
    id: 1,
    month: "Jan",
    Recommend: 10,
    appointment: 5,
  },
  {
    id: 2,
    month: "Feb",
    Recommend: 15,
    appointment: 8,
  },
  {
    id: 3,
    month: "Mar",
    Recommend: 5,
    appointment: 10,
  },
  {
    id: 4,
    month: "Apr",
    Recommend: 13,
    appointment: 7,
  },
  {
    id: 5,
    month: "May",
    Recommend: 20,
    appointment: 10,
  },
  {
    id: 6,
    month: "Jun",
    appointment: 12,
    Recommend: 6,
  },
  {
    id: 7,
    month: "Jul",
    appointment: 14,
    Recommend: 10,
  },
  {
    id: 8,
    month: "Aug",
    appointment: 12,
    Recommend: 5,
  },
  {
    id: 9,
    month: "Sep",
    appointment: 5,
    Recommend: 8,
  },
  {
    id: 10,
    month: "Oct",
    appointment: 15,
    Recommend: 14,
  },
  {
    id: 6,
    month: "Nov",
    appointment: 12,
    Recommend: 9,
  },
  {
    id: 6,
    month: "Dec",
    appointment: 8,
    Recommend: 15,
  },
];

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Char",
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
        suggestedMax: 20,
      },
    },
  };

export default function Userchart() {

      const [userData, setUserData] = useState({
        labels: userData1.map((data) => data.month),
        datasets: [
          {
            label: "Appointments",
            data: userData1.map((data) => data.appointment),
            borderColor: "#0000ff",
            backgroundColor: "#0000ff",
          },
          {
            label: "Recomendations",
            data: userData1.map((data) => data.Recommend),
            borderColor: "#008000",
            backgroundColor: "#008000",
          },
        ],
      });
  return (
    <Line  data={userData} 

options={options}
        
    />
  )
}
