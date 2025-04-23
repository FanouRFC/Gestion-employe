import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import { getStatistics } from "../services/enseignantApi";

function SalaireTotal() {
  const [animatedStats, setAnimatedStats] = useState(0);

  const fetchStats = async () => {
    try {
      const response = await getStatistics();
      const stats = response.data;

      if (stats) {
        const totalSalaire = stats.total;
        animateStats(totalSalaire); // Lancer l'animation
      }
    } catch (error) {
      console.error("Erreur lors de la récupération :", error);
    }
  };

  // Fonction pour animer la montée du chiffre
  const animateStats = (targetValue) => {
    let start = 0;
    const duration = 1000; // durée totale de l'animation en ms
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * targetValue);

      setAnimatedStats(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-4">
          <div className="max-w-full">
            <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <div className="min-w-full p-6">
                    <h1 className="text-xl font-bold text-center text-gray-800">
                      SALAIRE TOTAL
                    </h1>
                    <p className="text-gray-500 mt-4 text-center text-3xl font-semibold">
                      <span className="text-yellow-500 font-bold">MGA </span>
                      {animatedStats.toLocaleString("en-US") || "0"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalaireTotal;
