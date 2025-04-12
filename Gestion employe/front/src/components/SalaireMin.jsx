import Sidebar from "./Sidebar";
import React from "react";

function SalaireMin() {
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
                      SALAIRE MINIMUM
                    </h1>
                    <p className="text-gray-500 mt-4 text-center">
                      <span className="text-yellow-500 font-bold">MGA </span>
                      300.000
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

export default SalaireMin;
