import WelcomeBack from "../components/WelcomeBack";
import Navbar from "../components/Navbar";
import PostFeed from "../components/PostFeed";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

function MainPage() {
   const { user, loading } = useAuth();

  if (loading) return null;

  if (user) {
    return <Navigate to="/dashboard-home" replace />;
  }
  
  return (

    <div className="h-screen flex flex-col bg-white dark:bg-[#0A0A0A]">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:block ">
          <div className="sticky  overflow-hidden">
            <WelcomeBack />
          </div>
        </aside>

        <main className=" md:px-15 px-5 overflow-y-auto ">
          <div className="max-w-170 mx-auto">
            <PostFeed />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
