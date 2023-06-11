import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const selectedHero = localStorage.getItem("selectedHero");

  return !selectedHero ? <Outlet /> : <Navigate to={"/preview"} />;
};

export default PublicRoute;
