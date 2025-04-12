import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaDashcube, FaRegUser } from "react-icons/fa";
import logoGe from "../assets/logoGe.png";
import nodejs from "../assets/nodejs.png";

const Sidebar = () => {
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center">
        <p className="text-2xl leading-6 text-white">Gestion Employer</p>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-white focus:outline-none"
        >
          {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        className={`xl:rounded-r transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start h-full w-full sm:w-64 bg-gray-900 flex-col fixed xl:static z-50`}
      >
        <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
          <img src={logoGe} alt="logo" />
          <p className="text-2xl leading-6 text-white">Gestion Employer</p>
        </div>

        <div className="mt-6 flex flex-col justify-start items-center pl-4 w-full border-b border-gray-600 space-y-6 pb-5">
          <button className="flex items-center space-x-6 w-full text-white rounded focus:outline-none focus:text-indigo-400">
            <FaDashcube className="mr-2" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "leading-4 text-blue-500 font-medium"
                  : "text-base hover:text-blue-500 leading-4"
              }
            >
              Tableau
            </NavLink>
          </button>
          <button className="flex items-center space-x-6 w-full text-white rounded focus:outline-none focus:text-indigo-400">
            <FaRegUser className="mr-2" />
            <NavLink
              to="/enseignant"
              className={({ isActive }) =>
                isActive
                  ? "leading-4 text-blue-500 font-medium"
                  : "text-base hover:text-blue-500 leading-4"
              }
            >
              Enseignant
            </NavLink>
          </button>
        </div>

        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
          <button
            onClick={() => setMenu1Open(!menu1Open)}
            className="text-white flex justify-between items-center w-full py-5 focus:outline-none"
          >
            <p className="text-sm uppercase">SALAIRES</p>
            <FiChevronDown
              className={`transform transition ${
                menu1Open ? "rotate-180" : ""
              }`}
            />
          </button>
          {menu1Open && (
            <div className="flex flex-col w-full items-start pb-2">
              <NavLink to="/salairemin" className="px-3 py-2 w-full text-left text-gray-400 hover:text-white hover:bg-gray-700 rounded">Minimum</NavLink>
              <NavLink to="/salairemax" className="px-3 py-2 w-full text-left text-gray-400 hover:text-white hover:bg-gray-700 rounded">Maximum</NavLink>
              <NavLink to="/salairetotal" className="px-3 py-2 w-full text-left text-gray-400 hover:text-white hover:bg-gray-700 rounded">Total</NavLink>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
          <button
            onClick={() => setMenu2Open(!menu2Open)}
            className="text-white flex justify-between items-center w-full py-5 focus:outline-none"
          >
            <p className="text-sm uppercase">STATISTIQUE</p>
            <FiChevronDown
              className={`transform transition ${
                menu2Open ? "rotate-180" : ""
              }`}
            />
          </button>
          {menu2Open && (
            <div className="flex flex-col w-full items-start pb-2">
              <NavLink to="/histogramme" className="px-3 py-2 w-full text-left text-gray-400 hover:text-white hover:bg-gray-700 rounded">Histogramme</NavLink>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 w-full mt-auto pl-4 pt-6 border-t border-gray-700">
          <img
            className="rounded-full border-2 border-blue-500 w-10 h-10"
            src={nodejs}
            alt="avatar"
          />
          <div className="flex flex-col">
            <p className="text-sm text-white">Projet Nodejs</p>
            <p className="text-xs text-gray-300">sujet11@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
