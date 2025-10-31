
import type { RouteObject } from "react-router-dom";
import Instrumentando from "../pages/instrumentando/page";
import Matheus from "../pages/matheus/page";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Instrumentando />,
  },
  {
    path: "/matheus",
    element: <Matheus />,
  },
];

export default routes;
