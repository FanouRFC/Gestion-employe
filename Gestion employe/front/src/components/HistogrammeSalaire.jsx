import Sidebar from "./Sidebar";
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function HistogrammeSalaire() {
  const data = {
    labels: ["Salaires"],
    datasets: [
      {
        label: "Salaire Minimum",
        data: [1200],
        backgroundColor: "rgba(34,197,94,0.6)",
      },
      {
        label: "Salaire Maximum",
        data: [5200],
        backgroundColor: "rgba(239,68,68,0.6)",
      },
      {
        label: "Salaire Total",
        data: [15000],
        backgroundColor: "rgba(59,130,246,0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-4">
          <div className="w-full p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="text-white text-lg font-semibold mb-4">
              Histogramme des Salaires
            </h2>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistogrammeSalaire;
