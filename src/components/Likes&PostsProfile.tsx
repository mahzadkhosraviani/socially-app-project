function Likes_Posts_Profile() {
  return (
    <div className="bg-[#262626] flex flex-row gap-5 py-2 w-265 justify-around rounded-lg p-1.5 mt-4">
      <button className="flex-1 p-1 border-none  dark:bg-[#181818] rounded-lg dark: text-white ">
        {" "}
        posts
      </button>
      <button className="flex-1 border-none bg-[#181818] rounded-lg  text-white">
        {" "}
        likes
      </button>
    </div>
  );
}

export default Likes_Posts_Profile;
