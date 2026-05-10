import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import closeDark from "../assets/Component 2.png";
import closeLight from "../assets/Component 1.png";
import { editProfileService } from "../services/editProfileService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useUser } from "../hooks/use-username";

function EditProfile({ user, onClose }) {
  // console.log("EditProfile rendered");
  // console.log("userrrr:", user);
  // const [userInfo, setUserInfo] = useState(null);
  const username = user.email.split("@")[0];
  const [errors, setErrors] = useState({});

  const { data: userInfo, isLoading } = useUser(username);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await authService.getUser(username);
  //       setUserInfo(res.data.data);
  //       // console.log("goshti:", res.data.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
  if (userInfo) {
    setFormData({
      name: userInfo.name || "",
      bio: userInfo.bio || "",
      location: userInfo.location || "",
      website: userInfo.website || "",
    });
  }
}, [userInfo]);

const [formData, setFormData] = useState({
  name: "",
  bio: "",
  location: "",
  website: "",
  });
  
  const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    
  });
  type FormData = z.infer<typeof schema>;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const showToast = (message: string, type: "success" | "error") => {
  const icon =
    type === "success"
      ? "/src/assets/tick.png"
      : "/src/assets/closebtn-removebg-preview.png";
    
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-custom-enter" : "animate-custom-leave"
          } transition ease-in-out`}
        >
          <div className="rounded-lg pr-30 py-4  bg-[#191919] border border-[#383838] font-bold text-xs text-[#FAFAFA] text-left">
            <div className="flex flex-row items-center">
              <button
                type="button"
                onClick={() => toast.dismiss(t.id)}
                className="ml-2 mr-2"
                aria-label="Close"
              >
                <img
                  src= {icon}
                  alt="close btn"
                  className="w-4 h-4"
                />
               
              </button>

              <span>{message}</span>
            </div>
          </div>
        </div>
      ),
      { duration: 3000 },
    );
  };
  const handleSave = async () => {
  try {
    const validated = schema.safeParse(formData);

    if (!validated.success) {
      setErrors(validated.error.flatten().fieldErrors);
      return;
    }

    setErrors({});

    const res = await editProfileService.editProfile(user.id, formData);

    
    showToast(res?.data?.message || "Profile updated successfully","success");

    onClose();
  } catch (err: any) {
       
    showToast(err?.response?.data?.error || "Something went wrong","error");
  }
};

// const handleSave = async () => {
//   console.log("saving...", formData);
//   // try {
//   //   await editProfileService.editProfile(user.id, formData);
//   //   onClose();
//   // } catch (err) {
//   //   console.error(err);
//   // }
//   try {
//     // ۱. اعتبارسنجی Zod
//     const validated = schema.safeParse(formData);

//     if (!validated.success) {
//       const fieldErrors = validated.error.flatten().fieldErrors;
//       setErrors(fieldErrors);  // ریختن خطا در استیت برای نمایش
//       return; // تا خطا هست، سیو نکن
//     }

//     // اگر خطا نبود → خطاها ریست شوند
//     setErrors({});

//     // ۲. ارسال به API
//     await editProfileService.editProfile(user.id, formData);

//     onClose();
//   } catch (err) {
//     console.error(err);
//   }
// };
  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
      <div className=" flex flex-col gap-3  bg-[#FFFFFF] dark:bg-[#0A0A0A] max-w-[500px] w-full px-5  text-[#171717] dark:text-[#FAFAFA] h-auto shadow-[0px_4px_6px_-4px_#0000001A] shadow-[0px_10px_15px_-3px_#0000001A] border border-[#E5E5E5] dark:border-[#262626] rounded-[8px]">
        <div className="flex flex-row justify-between">
          <p className="mb-6 mt-6 font-bold text-[18px]">Edit Profile</p>

          <button onClick={onClose}>
            <img
              src={closeDark}
              className="hidden w-[16px] h-[16px] mb-6 mt-6 dark:block cursor-pointer"
              alt="close_btn"
            />
            <img
              src={closeLight}
              className="block w-[16px] h-[16px] mb-6 mt-6 dark:hidden cursor-pointer"
              alt="close_btn"
            />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-[14px]">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            type="text"
            placeholder="Enter your name"
            className="border  border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[36px] px-3 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3]"
            onChange={handleChange}
          />
        </div>
         {errors.name && (
                  <p className="mt-[-1] text-red-500 text-xs">
                    {errors.name[0]}
                  </p>
                )}
        <div className="flex flex-col gap-3">
          <label htmlFor="bio" className="text-[14px]">
            Bio
          </label>

          <textarea
            value={formData.bio}
            name="bio"
            placeholder="Enter your bio"
            className="border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[136px] px-3 pt-1 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3] resize-none"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="location" className="text-[14px]">
            Location
          </label>
          <input
            value={formData.location}
            type="text"
            name="location"
            className="border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[36px] px-3 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3]"
            placeholder="Where you are at"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="website" className="text-[14px]">
            Website
          </label>
          <input
            value={formData.website}
            type="text"
            name="website"
            placeholder="Your personal website"
            className="border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] h-[36px] px-3 placeholder:text-[#737373] text-[14px] dark:placeholder:text-[#A3A3A3]"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-3 justify-end mt-2 mb-4">
          <button
            onClick={onClose}
            className=" bg-[#FFFFFF] dark:text-[#FAFAFA] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#262626] rounded-[6px] py-[8px] px-[16px] text-[14px] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] cursor-pointer"
          >
            Cancel
          </button>
          <button onClick={handleSave}
          className=" bg-[#0A0A0A] text-[#FAFAFA] dark:bg-[#FAFAFA] py-[8px] px-[16px] dark:text-[#171717] rounded-[6px] text-[14px] cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
