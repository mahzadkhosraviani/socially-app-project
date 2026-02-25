import { useNavigate } from "react-router-dom";

function WelcomeBack() {
  const navigate = useNavigate();
  return (
    <>
      <section className="dark:border dark:border-[#262626] shadow-[0px_1px_3px_0px_#0000001A] border-t border-t-[#E5E5E5] mt-5 ml-4 rounded-3xl px-4 pt-6 pb-4 w-48  md:mt-7 md:ml-9 md:w-100 md:pt-8  text-center flex flex-col justify-center items-center ">
        <p className="dark:text-white font-bold md:text-lg text-md md:mb-3 mb-3">Welcome Back!</p>
        <p className="w-40 mb-1 text-[13px] md:text-[15px]  md:w-60 text-[#737373]">
          Login to access your profile and connect with others.
        </p>
        <div className=" flex flex-col gap-2.5 mt-3">
          <button onClick={() => navigate("/sign-in")} className="dark:border dark:border-[#262626] cursor-pointer text-sm md:text-md w-40 md:w-88 md:px-4 md:py-2 rounded-md px-2 py-1  bg-[#0A0A0A] text-white shadow-[0px_1px_3px_0px_#0000001A] ">
           Sign In
          </button>
          <button onClick={() => navigate("/sign-up")}  className="dark:bg-white dark:text-black cursor-pointer text-sm md:text-md w-40 md:w-88 md:px-4 md:py-2 rounded-md px-2 py-1  text-black shadow-[0px_1px_3px_0px_#0000001A] mb-2.5">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
}
export default WelcomeBack;
