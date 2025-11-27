
import type { RouteObject } from "react-router-dom";
import Instrumentando from "../pages/instrumentando/page";
import Matheus from "../pages/matheus/page";
import Home from "../pages/home/page";
import BlackFriday from "../pages/black/page";
import PTPage from "../pages/pt/page";
import URO from "../pages/uro/page";


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
  {
    path: "/pt",
    element: <PTPage />,
  },
  {
    path: "/uro",
    element: <URO />,
  },
];

export default routes;
