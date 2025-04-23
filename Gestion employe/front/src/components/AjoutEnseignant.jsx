import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  getNextId,
  createEnseignant,
  updateEnseignant,
} from "../services/enseignantApi";

function AjoutEnseignant() {
  const [formData, setFormData] = useState({
    numens: "",
    nom: "",
    nbheures: "",
    tauxhoraire: "",
  });

  // edit
  const location = useLocation();
  const enseignantToEdit = location.state?.enseignant;
  const fetchNextId = async () => {
    try {
      const response = await getNextId();
      setFormData((prev) => ({
        ...prev,
        numens: response.data.nextId,
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération du prochain ID :", error);
    }
  };

  // nuero manaraka + donne a modifie
  useEffect(() => {
    if (enseignantToEdit) {
      setFormData({
        numens: enseignantToEdit.numens,
        nom: enseignantToEdit.nom,
        nbheures: enseignantToEdit.nbheures,
        tauxhoraire: enseignantToEdit.tauxhoraire,
      });
    } else {
      fetchNextId();
    }
  }, [enseignantToEdit]);

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
      if (enseignantToEdit) {
        await updateEnseignant(formData.numens, formData);
        setNotification({
          type: "success",
          message: "Modification réussie",
          description: "Enseignant modifié avec succès !",
        });
      } else {
        await createEnseignant(formData);
        setNotification({
          type: "success",
          message: "Ajout réussie",
          description: "Enseignant ajouté avec succès !",
        });
      }
      setFormData({ numens: "", nom: "", nbheures: "", tauxhoraire: "" });
      fetchNextId();
    } catch (err) {
      console.error(err);
      setNotification({
        type: "success",
        message: "Erreur d'ajout",
        description: "Erreur lors de l'enregistrement de l'enseignant.",
      });
    }
  };

  // notification
  const [notification, setNotification] = useState(null);
  const renderNotification = () => {
    if (!notification) return null;

    return (
      <div
        className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg ${
          notification.type === "success" ? "bg-indigo-400" : "bg-red-400"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-white">{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="text-white ml-2 hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <p className="text-white">{notification.description}</p>
      </div>
    );
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(
        () => {
          setNotification(null);
        },
        notification.duration ? notification.duration * 1000 : 3000
      );

      return () => clearTimeout(timer);
    }
  }, [notification]);

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
              {enseignantToEdit ? "Modifier Information" : "Nouveau Enseignant"}
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
                    className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm"
                    readOnly
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
                    Taux horaire ( MGA )
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
              {enseignantToEdit ? "Modifier" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>{" "}
      {renderNotification()}
    </div>
  );
}

export default AjoutEnseignant;
