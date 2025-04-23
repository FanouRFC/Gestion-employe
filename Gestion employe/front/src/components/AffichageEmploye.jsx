import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { getAllEnseignants, deleteEnseignant } from "../services/enseignantApi";

function AffichageEmploye({ refreshStats }) {
  const [enseignants, setEnseignants] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [enseignantToDelete, setEnseignantToDelete] = useState(null);
  const [notification, setNotification] = useState(null);

  // Charger les enseignants
  const fetchEnseignants = async () => {
    try {
      const response = await getAllEnseignants();
      if (response.data.Enseignants) {
        setEnseignants(response.data.Enseignants);
        refreshStats();
      } else {
        setEnseignants([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération :", error);
    }
  };

  // Edit info
  const navigate = useNavigate();

  const handleEdit = (enseignant) => {
    navigate("/enseignant", { state: { enseignant } });
  };

  // Supprimer un enseignant
  const handleDelete = (enseignant) => {
    setEnseignantToDelete(enseignant);
    setIsModalVisible(true);
  };

  // Confirmer la suppression
  const confirmDelete = async () => {
    try {
      await deleteEnseignant(enseignantToDelete.numens);
      await fetchEnseignants();
      setNotification({
        type: "success",
        message: "Suppression réussie",
        description: "L'enseignant a été supprimé avec succès.",
      });
    } catch (err) {
      console.error(err);
      setNotification({
        type: "error",
        message: "Erreur",
        description: "Échec de la suppression de l'enseignant.",
      });
    }
    setIsModalVisible(false); // Fermer la modale après la confirmation
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Fermer la modale sans supprimer
  };

  // Afficher notification
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

  useEffect(() => {
    fetchEnseignants();
  }, []);

  return (
    <div className="max-w-full mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden bg-white">
              <div className="flex space-x-14 m-5">
                <select
                  name="numero"
                  id="numens"
                  className="bg-white w-1/5 border-b border-gray-900/20 text-gray-500"
                >
                  <option value="">numero</option>
                  <option value="">1001</option>
                  <option value="">1002</option>
                  <option value="">1003</option>
                </select>
                <select
                  name="nom"
                  id="nom"
                  className="bg-white w-1/5 border-b border-gray-900/20 text-gray-500"
                >
                  <option value="">nom</option>
                  <option value="">Nantenaina</option>
                  <option value="">Koto</option>
                  <option value="">Vero</option>
                </select>
              </div>
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-white">
                <thead className="bg-gray-100 dark:bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-extrabold tracking-wider text-left text-gray-900 uppercase dark:text-gray-900"
                    >
                      Numero
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-extrabold tracking-wider text-left text-gray-900 uppercase dark:text-gray-900"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-extrabold tracking-wider text-left text-gray-900 uppercase dark:text-gray-900"
                    >
                      Nombre d'heures
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-extrabold tracking-wider text-left text-gray-900 uppercase dark:text-gray-900"
                    >
                      Taux horaire
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-extrabold tracking-wider text-left text-gray-900 uppercase dark:text-gray-900"
                    >
                      Salaire
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-white dark:divide-white">
                  {enseignants.map((enseignant) => (
                    <tr key={enseignant.numens} className="hover:bg-gray-100">
                      <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                        {enseignant.numens}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                        {enseignant.nom}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                        {enseignant.nbheures}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                        {enseignant.tauxhoraire}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                        {enseignant.salaire}
                      </td>
                      <td className="py-4 px-6 text-base font-medium text-right whitespace-nowrap">
                        <div className="flex items-center space-x-6">
                          <MdDeleteForever
                            className="text-gray-600 text-xl hover:text-gray-800 cursor-pointer"
                            onClick={() => handleDelete(enseignant)}
                          />
                          <a
                            onClick={() => handleEdit(enseignant)}
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modale de confirmation */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-4">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Êtes-vous sûr de vouloir supprimer cet enseignant ?
            </h2>
            <p className="text-center text-gray-600">
              {enseignantToDelete?.numens + " : " + enseignantToDelete?.nom}
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all"
              >
                Supprimer
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-all"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {renderNotification()}
    </div>
  );
}

export default AffichageEmploye;
