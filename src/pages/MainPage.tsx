import { Fragment } from "react/jsx-runtime";
import WelcomeBack from "../components/WelcomeBack";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import PostFeed from "../components/PostFeed";

function MainPage() {
  return (
    <div className="dark:bg-[#0A0A0A]">
      <Navbar />
      <div className="flex flex-row gap-10 min-h-screen  items-start dark:bg-[#0A0A0A]">
        <WelcomeBack />
        <PostFeed />
      </div>
    </div>
  );
}

export default MainPage;
