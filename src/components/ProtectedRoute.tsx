import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import LoadingScreen from "./LoadingScreen";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen text="Checking authentication..." />;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};
