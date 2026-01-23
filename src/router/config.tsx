
import type { RouteObject } from "react-router-dom";
import Instrumentando from "../pages/instrumentando/page";
import Matheus from "../pages/matheus/page";
import Home from "../pages/home/page";
import CapilarPage from "../pages/capilar/page";
import URO from "../pages/uro/page";
import HotPage from "../pages/hot/page";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Instrumentando />,
  },
  {
    path: "/matheus",
    element: <Matheus />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/capilar",
    element: <CapilarPage />,
  },
  {
    path: "/uro",
    element: <URO />,
  },
  {
    path: "/hot",
    element: <HotPage />,
  },
  {
    path: "/grade",
    element: <GradePage />,
  },
];

export default routes;
