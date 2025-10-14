
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Recuperacao from "../pages/recuperacao/page";
import Instrumentando from "../pages/instrumentando/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recuperacao",
    element: <Recuperacao />,
  },
  {
    path: "/instrumentando",
    element: <Instrumentando />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
