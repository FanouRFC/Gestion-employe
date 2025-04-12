import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

function AffichageEmploye() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (e, productId) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, productId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== productId));
    }
  };

  const products = [
    { 
      id: 1,
      num: 1001,
      name: 'Nantenaina',
      category: 5,
      taux: "10%",
      price: "$1999"
    },
    {
      id: 2,
      num: 1002,
      name: 'Vero',
      category: 12,
      taux: "20%",
      price: "$2999",
    },
    { 
      id: 3,
      num: 1003,
      name: "Jheims",
      category: 20,
      taux: "30%",
      price: "$999"
    },
    {
      id: 4,
      num: 1004,
      name: "Koto",
      category: 16,
      taux: "40%",
      price: "$99",
    },
    {
      id: 5,
      num: 1005,
      name: "Zafy",
      category: 5,
      taux: "50%",
      price: "$599",
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden bg-white">
                <div className="flex space-x-14 m-5">
                  <select name="numero" id="numens" className="bg-white w-1/5 border-b border-gray-900/20 text-gray-500">
                    <option value="">numero</option>
                    <option value="">1001</option>
                    <option value="">1002</option>
                    <option value="">1003</option>
                  </select>
                  <select name="nom" id="nom" className="bg-white w-1/5 border-b border-gray-900/20 text-gray-500">
                    <option value="">nom</option>
                    <option value="">Nantenaina</option>
                    <option value="">Koto</option>
                    <option value="">Vero</option>
                  </select>
                </div>
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-white">
                  <thead className="bg-gray-100 dark:bg-white">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedItems(
                                  products.map((product) => product.id)
                                );
                              } else {
                                setSelectedItems([]);
                              }
                            }}
                            checked={selectedItems.length === products.length}
                          />
                          <label for="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
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
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-100">
                        <td className="p-4 w-4">
                          <div className="flex items-center">
                            <input
                              id={`checkbox-table-${product.id}`}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={selectedItems.includes(product.id)}
                              onChange={(e) =>
                                handleCheckboxChange(e, product.id)
                              }
                            />
                            <label
                              for={`checkbox-table-${product.id}`}
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                          {product.num}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                          {product.name}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                          {product.category}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                          {product.taux}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-gray-600">
                          {product.price}
                        </td>
                        <td className="py-4 px-6 text-base font-medium text-right whitespace-nowrap">
                          <div className="flex items-center space-x-6">
                            {" "}
                            <MdDeleteForever className="text-gray-600 text-xl hover:text-gray-800 cursor-pointer" />
                            <a
                              href="#"
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
      </div>
    </>
  );
}

export default AffichageEmploye;