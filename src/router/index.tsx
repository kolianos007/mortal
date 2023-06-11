import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { ROUTES } from "appConstants";
import SelectFighter from "screens/SelectFighter";
import Preview from "screens/Preview";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTES.home,
        element: <SelectFighter />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTES.preview,
        element: <Preview />,
      },
    ],
  },
]);

export default router;
