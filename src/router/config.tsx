
import type { RouteObject } from "react-router-dom";
import Instrumentando from "../pages/instrumentando/page";
import Matheus from "../pages/matheus/page";
import Home from "../pages/home/page";
import BlackFriday from "../pages/black/page";


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
    path: "/black",
    element: <BlackFriday />,
  },
];

export default routes;
