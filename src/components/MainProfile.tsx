import { useState } from "react";
import { useParams } from "react-router-dom";
import Likes_Posts_Profile from "./Likes&PostsProfile";
import ProfileContent from "./profileContent";

const MainProfile = ({user}) => {
  // const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"posts" | "likes">("posts");

  return (
    <>
      <div>
        <Likes_Posts_Profile activeTab={activeTab} onChangeTab={setActiveTab} />
        <ProfileContent
          userId={user.id}
          activeTab={activeTab}
        />
        {/* <ProfileContent userId={id} activeTab={activeTab}/> */}
      </div>
    </>
  );
};
export default MainProfile;
