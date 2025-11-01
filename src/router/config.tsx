
import type { RouteObject } from "react-router-dom";
import Instrumentando from "../pages/instrumentando/page";
import Matheus from "../pages/matheus/page";
import Home from "../pages/home/page";


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
];

export default routes;
