import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { createEnseignant } from "../services/enseignantApi";

function AjoutEnseignant() {
  const [formData, setFormData] = useState({
    numens: "",
    nom: "",
    nbheures: "",
    tauxhoraire: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createEnseignant(formData);
      alert("Enseignant ajouté avec succès !");
      setFormData({ numens: "", nom: "", nbheures: "", tauxhoraire: "" });
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'ajout de l'enseignant.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="shadow px-4 rounded py-4">
          <div className="flex flex-col rounded-md items-center py-4">
            <a
              className="font-bold text-blue-600 uppercase hover:text-blue-700 text-2xl"
              href="#"
            >
              Nouveau Enseignant
            </a>
          </div>

          <div className="flex justify-center space-y-12">
            <div className="border-b border-gray-900/10 pb-12 w-full max-w-4xl">
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="numens"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Numéro
                  </label>
                  <input
                    type="text"
                    name="numens"
                    id="numens"
                    value={formData.numens}
                    onChange={handleChange}
                    className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="nom"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="nbheures"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Nombre des heures
                  </label>
                  <input
                    id="nbheures"
                    name="nbheures"
                    type="number"
                    value={formData.nbheures}
                    onChange={handleChange}
                    className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="tauxhoraire"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Taux horaire
                  </label>
                  <input
                    type="text"
                    name="tauxhoraire"
                    id="tauxhoraire"
                    value={formData.tauxhoraire}
                    onChange={handleChange}
                    className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end w-5/6 gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() =>
                setFormData({
                  numens: "",
                  nom: "",
                  nbheures: "",
                  tauxhoraire: "",
                })
              }
            >
              annuler
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
            >
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AjoutEnseignant;
