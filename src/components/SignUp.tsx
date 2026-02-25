
import {useNavigate, Link } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#262626] w-full  px-4 py-10">
      <div className="w-full max-w-[420px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#383838] h-130">
        <div className=" rounded-l-xl bg-[#191919] text-white">
          <div className="text-center text-white flex flex-col gap-1.5 mt-7">
            <p className="text-[#FAFAFA] text-2xl font-bold">
              {" "}
              Create your account
            </p>
            <p className="text-[#A3A3A3] text-[14px]  max-w-[700px]">
              Enter your email below to create your account
            </p>
          </div>
          <div className=" mx-8">
            <div className="flex flex-col gap-2 mt-7">
              <label
                htmlFor="name"
                className="text-left text-[14px] font-medium"
              >
                Name
              </label>
              <input
                className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323] placeholder:text-[14px]"
                type="text"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <label
                htmlFor="email"
                className="text-left text-[14px] font-medium"
              >
                Email
              </label>
              <input
                className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323] placeholder:text-[14px]"
                type="text"
                placeholder="m@example.com"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <label
                htmlFor="password"
                className="text-left text-[14px] font-medium"
              >
                Password
              </label>
              <input
                className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323]"
                type="text"
                name="password"
              />
            </div>
            <button
              type="submit"
              className="mt-7 text-center bg-white text-black w-full h-9 px-2 rounded-lg"
            >
             Create Account
            </button>
          </div>
          <div className="flex flex-row justify-center items-center mt-8">
            <p className="text-center  text-[#A3A3A3] text-[14px]">
             Already have an account? 
            </p>
            <Link
              to="/sign-in"
              className="text-[#A3A3A3]  text-[14px] underline underline-offset ml-0.5"
            
            >
              {" "}
             Sign in
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-7 text-[#A3A3A3] text-[14px] text-center">
          By clicking continue, you agree to our{" "}
          <a className="underline underline-offset" href="">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="underline underline-offset" href="">
            Privacy Policy
          </a>{" "}
          .
        </p>
      </div>
    </div>
  );
}

export default SignUp;
