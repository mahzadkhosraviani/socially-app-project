function WelcomeBack() {
  return (
    <>
      <section className="shadow-[0px_1px_3px_0px_#0000001A] border-t border-t-[#E5E5E5] mt-5 ml-4 rounded-3xl  pt-6 pb-4 w-50 md:mt-7 md:ml-10 md:w-65 md:pt-8  text-center flex flex-col justify-center items-center ">
        <p className="font-bold text-lg">Welcome Back!</p>
        <p className="w-45 mt-3 text-sm md:text-[15px] md:w-60 text-[#737373]">Login to access your profile and connect with others.</p>
        <div className=" flex flex-col gap-2.5 mt-3">
          <button className="text-sm md:text-md w-44 md:w-55 md:px-4 md:py-2 rounded-md px-2 py-1 bg-[#0A0A0A] text-white shadow-[0px_1px_3px_0px_#0000001A]">Log In</button>
          <button className="text-sm md:text-md w-44 md:w-55 md:px-4 md:py-2 rounded-md px-2 py-1  text-black shadow-[0px_1px_3px_0px_#0000001A]">Sign Up</button>
        </div>
      </section>
    </>
  );
}
export default WelcomeBack;
