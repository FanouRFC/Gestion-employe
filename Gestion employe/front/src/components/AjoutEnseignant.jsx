import React from "react";
import Sidebar from "./Sidebar";

function AjoutEnseignant() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-4">
          <form className="shadow px-4 rounded py-4">
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
                      autoComplete="given-name"
                      className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm sm:leading-6"
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
                      autoComplete="given-name"
                      className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm sm:leading-6"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nnheures"
                      className="text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre des heures
                    </label>
                    <input
                      id="nnheures"
                      name="nnheures"
                      type="number"
                      autoComplete="nnheures"
                      className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm sm:leading-6"
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
                      autoComplete="address-level2"
                      className="w-full rounded-md border pl-2 py-1.5 text-gray-900 bg-gray-100 shadow-sm sm:text-sm sm:leading-6"
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
              >
                annuler
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Confirmer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AjoutEnseignant;
