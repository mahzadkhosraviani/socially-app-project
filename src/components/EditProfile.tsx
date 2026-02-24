function EditProfile() {
  return (
    <div className="flex flex-col   min-h-screen justify-center items-center px-4">
      <div className=" flex flex-col gap-3  bg-[#FFFFFF] dark:bg-[#0A0A0A] max-w-[500px] w-full px-5  text-[#171717] dark:text-[#FAFAFA] h-[580px] shadow-[0px_4px_6px_-4px_#0000001A] shadow-[0px_10px_15px_-3px_#0000001A] border border-[#E5E5E5] dark:border-[#262626] rounded-[8px]">
        <div className="flex flex-row justify-between">
          <p className="mb-6 mt-6 font-bold text-[18px]">Edit Profile</p>
          <button>
            <img
              src="src\assets\Component 2.png"
              className="hidden w-[16px] h-[16px] mb-6 mt-6 dark:block"
              alt="close_btn"
            />
            <img
              src="src\assets\Component 1.png"
              className="block w-[16px] h-[16px] mb-6 mt-6 dark:hidden"
              alt="close_btn"
            />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-[14px]">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="border  border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[36px] px-3 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="bio"  className="text-[14px]">Bio</label>

          <textarea
            name="bio"
            placeholder="Enter your bio"
            className="border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[136px] px-3 pt-1 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3] resize-none"
          ></textarea>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="location"  className="text-[14px]">Location</label>
          <input
            type="text"
            name="location"
            className="border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[36px] px-3 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3]"
            placeholder="Where you are at"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="name1" className="text-[14px]">Name</label>
          <input
            type="text"
            name="name1"
            placeholder="Your personal website"
            className="border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[36px] px-3 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3]"
          />
        </div>
        <div className="flex flex-row gap-3 justify-end mt-2">
          <button className=" bg-[#FFFFFF] dark:text-[#FAFAFA] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] py-[8px] px-[16px] text-[14px] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
            Cancel
          </button>
          <button className=" bg-[#0A0A0A] text-[#FAFAFA] dark:bg-[#FAFAFA] py-[8px] px-[16px] dark:text-[#171717] rounded-[6px] text-[14px]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
