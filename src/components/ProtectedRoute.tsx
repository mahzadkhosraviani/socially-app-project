import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();


  if (loading) {
    return <div>  please wait a moment ...</div>;
  }

  // ۲. اگر کاربر لاگین نبود، به صفحه لاگین هدایتش کن
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  // ۳. اگر لاگین بود، محتوای صفحه (Outlet) رو نمایش بده
  return <Outlet />;
};
