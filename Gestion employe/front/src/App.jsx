import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import AjoutEnseignant from "./components/AjoutEnseignant";
import SalaireMax from "./components/SalaireMax";
import SalaireMin from "./components/SalaireMin";
import SalaireTotal from "./components/SalaireTotal";
import HistogrammeSalaire from "./components/HistogrammeSalaire";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/enseignant",
    element: <AjoutEnseignant />,
  },
  {
    path: "/salairemax",
    element: <SalaireMax/>,
  },
  {
    path: "/salairemin",
    element: <SalaireMin/>,
  },
  {
    path: "/salairetotal",
    element: <SalaireTotal/>,
  },
  {
    path: "/histogramme",
    element: <HistogrammeSalaire/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
