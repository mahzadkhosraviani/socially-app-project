type props = {
  activeTab: "posts" | "likes";
  onChangeTab: (tab: "posts" | "likes") => void;
};
function Likes_Posts_Profile({ activeTab, onChangeTab }: props) {
  return (
    <div className="dark:bg-[#262626] bg-[#f4f3f3] flex flex-row gap-2 w-full md:w-240 justify-around  rounded-lg p-1 mt-4">
      <button
        onClick={() => onChangeTab("posts")}
        className={` cursor-pointer flex-1 p-0.5 rounded-lg 
        ${
          activeTab === "posts"
            ? "dark:border dark:border-[#6d6d6d] dark:bg-[#343434] text-black bg-white dark:text-white"
            : "dark:bg-[#262626]/20  dark:text-[#8B8B8B]"
        }`}
      >
        posts
      </button>
      <button
        onClick={() => onChangeTab("likes")}
        className={` cursor-pointer flex-1 p-0.5 rounded-lg
        ${
          activeTab === "likes"
            ? "dark:border dark:border-[#6d6d6d] dark:bg-[#343434] text-black bg-white dark:text-white"
            : " dark:bg-[#262626]/20 dark:text-[#8B8B8B]"
        }`}
      >
        {" "}
        likes
      </button>
    </div>
  );
}

export default Likes_Posts_Profile;
