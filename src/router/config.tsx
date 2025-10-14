
import type { RouteObject } from "react-router-dom";
import Instrumentando from "../pages/instrumentando/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Instrumentando />,
  },
  {
    path: "*",
    element: <Instrumentando />,
  },
];

export default routes;
