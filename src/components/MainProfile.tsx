import { useState } from "react";

import Likes_Posts_Profile from "./Likes&PostsProfile";
import ProfileContent from "./ProfileContent";

const MainProfile = ({ user }) => {
  const [activeTab, setActiveTab] = useState<"posts" | "likes">("posts");

  return (
    <>
      <Likes_Posts_Profile activeTab={activeTab} onChangeTab={setActiveTab} />

      <ProfileContent userId={user.id} activeTab={activeTab} />
    </>
  );
};
export default MainProfile;
