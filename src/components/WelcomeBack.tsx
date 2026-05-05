import { useNavigate } from "react-router-dom";

function WelcomeBack() {
  const navigate = useNavigate();
  return (
    <>
      <section className="dark:bg-[#171717] hidden md:flex dark:border dark:border-[#262626] shadow-[0px_1px_3px_0px_#0000001A] border border-[#E5E5E5]   rounded-3xl px-4 pb-4  md:mt-7 md:ml-20 md:w-77 md:pt-8  text-center  flex-col justify-center items-center ">
        <p className="dark:text-white font-bold md:text-lg text-md md:mb-3 mb-3">Welcome Back!</p>
        <p className="w-40 mb-1 text-[13px] md:text-[15px]  md:w-60 text-[#737373]">
          Login to access your profile and connect with others.
        </p>
        <div className=" flex flex-col gap-2.5 mt-3">
          <button onClick={() => navigate("/sign-in")} className="dark:border dark:border-[#262626] cursor-pointer text-sm md:text-md  md:w-67 md:px-4 md:py-2 rounded-md px-2 py-1  bg-[#2b2b2b] text-white shadow-[0px_1px_3px_0px_#0000001A] ">
           Sign In
          </button>
          <button onClick={() => navigate("/sign-up")}  className="dark:bg-white dark:text-black cursor-pointer text-sm md:text-md md:w-67 md:px-4 md:py-2 rounded-md px-2 py-1  text-black shadow-[0px_1px_3px_0px_#0000001A] mb-2.5">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
}
export default WelcomeBack;
