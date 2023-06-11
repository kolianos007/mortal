import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const selectedHero = localStorage.getItem("selectedHero");

  return selectedHero ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
