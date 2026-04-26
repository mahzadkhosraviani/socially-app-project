import { useState } from "react";

function Likes_Posts_Profile() {
  const [clicked,setClicked]=useState<string|null>(null);

  return (
    <div  className="bg-[#262626] flex flex-row gap-5 py-2 w-240 justify-around rounded-lg p-1.5 mt-4">
   <button
        onClick={() => setClicked("posts")}
        className={`cursor-pointer flex-1 p-1 border-none rounded-lg
        ${clicked === "posts" 
          ? "bg-white text-black dark:bg-white dark:text-black"
          : "bg-black text-white dark:bg-[#181818] dark:text-white"
        }`}
      >
        posts
      </button>
      <button onClick={() => setClicked("likes")}
        className={`cursor-pointer flex-1 p-1 border-none rounded-lg
        ${clicked==="likes"
          ? "bg-white text-black dark:bg-white dark:text-black"
          : "bg-black text-white dark:bg-[#181818] dark:text-white"
        }`}>
        {" "}
        likes
      </button>
    </div>
  );
}

export default Likes_Posts_Profile;
