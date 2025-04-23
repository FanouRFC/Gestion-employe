import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getStatistics } from "../services/enseignantApi";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function HistogrammeSalaire() {
  const [stats, setStats] = useState({
    min: 0,
    max: 0,
    total: 0,
  });

  const fetchStats = async () => {
    try {
      const response = await getStatistics();
      const data = response.data;
      if (data) {
        setStats({
          min: data.min,
          max: data.max,
          total: data.total,
        });
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques :", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const data = {
    labels: ["Salaires"],
    datasets: [
      {
        label: "Salaire Minimum",
        data: [stats.min],
        backgroundColor: "rgba(34,197,94,0.6)",
      },
      {
        label: "Salaire Maximum",
        data: [stats.max],
        backgroundColor: "rgba(239,68,68,0.6)",
      },
      {
        label: "Salaire Total",
        data: [stats.total],
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
  );
}

export default HistogrammeSalaire;
