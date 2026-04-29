import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: 4 }}> please wait a moment ...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  return <Outlet />;
};
