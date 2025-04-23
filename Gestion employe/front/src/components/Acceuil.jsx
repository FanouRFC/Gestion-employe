import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AffichageEmploye from "./AffichageEmploye";
import { getStatistics } from "../services/enseignantApi";

function Acceuil() {
  const [datasalaire, setDatasalaire] = useState([]);
  const [animatedStats, setAnimatedStats] = useState({});

  const fetchStats = async () => {
    try {
      const response = await getStatistics();
      const stats = response.data;

      if (stats) {
        const formattedStats = [
          {
            idSalaire: 1,
            typeSalaire: "SALAIRE TOTAL",
            valeurSalaire: stats.total,
          },
          {
            idSalaire: 2,
            typeSalaire: "SALAIRE MAXIMUM",
            valeurSalaire: stats.max,
          },
          {
            idSalaire: 3,
            typeSalaire: "SALAIRE MINIMUM",
            valeurSalaire: stats.min,
          },
        ];
        setDatasalaire(formattedStats);

        // Déclencher animation des chiffres
        animateStats(formattedStats);
      } else {
        setDatasalaire([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération :", error);
    }
  };

  // Animation des chiffres
  const animateStats = (stats) => {
    const newAnimated = {};
    stats.forEach((item) => {
      let start = 0;
      const end = item.valeurSalaire;
      const step = Math.ceil(end / 50); // nombre d'étapes

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setAnimatedStats((prev) => ({
          ...prev,
          [item.idSalaire]: start,
        }));
      }, 20);
    });
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <AffichageEmploye refreshStats={fetchStats} />
        <div className="flex justify-between space-x-4 mt-4">
          {datasalaire.map((item) => (
            <div key={item.idSalaire} className="w-1/3 max-w-full">
              <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <div className="min-w-full p-6 divide-gray-100 dark:divide-white">
                      <h1 className="text-xl font-bold text-center text-gray-800">
                        {item.typeSalaire}
                      </h1>
                      <p className="text-gray-500 mt-4 text-center">
                        <span className="text-yellow-500 font-bold">MGA </span>
                        {animatedStats[item.idSalaire]?.toLocaleString(
                          "en-US"
                        ) || "0"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
