import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AffichageEmploye from "./AffichageEmploye";

function Acceuil() {
  const [datasalaire, setDatasalaire] = useState([
    {
      idSalaire: 1,
      typeSalaire: "SALAIRE TOTAL",
      valeurSalaire: 10000000,
    },
    {
      idSalaire: 2,
      typeSalaire: "SALAIRE MAXIMUM",
      valeurSalaire: 600000,
    },
    {
      idSalaire: 1,
      typeSalaire: "SALAIRE MINIMUM",
      valeurSalaire: 300000,
    },
  ]);

  return (
    <>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-4">
          <AffichageEmploye />
          <div className="flex justify-between space-x-4 mt-4">
            {datasalaire.map((items) => (
              <div key={items.idSalaire} className="w-1/3 max-w-full">
                <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <div className="min-w-full p-6 divide-gray-100 dark:divide-white">
                        <h1 className="text-xl font-bold text-center text-gray-800">
                          {items.typeSalaire}
                        </h1>
                        <p className="text-gray-500 mt-4 text-center">
                          <span className="text-yellow-500 font-bold">
                            MGA{" "}
                          </span>
                          {items.valeurSalaire}
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
    </>
  );
}

export default Acceuil;
