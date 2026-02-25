import { useNavigate, Link } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#262626] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#383838]">
        {/* Left panel */}
        <div className="bg-[#191919] text-white">
          <div className="text-center flex flex-col gap-1.5 mt-7">
            <p className="text-[#FAFAFA] text-2xl font-bold">Welcome back</p>
            <p className="text-[#A3A3A3] max-w-[700px]">
              Login to your Socially account
            </p>
          </div>

          <div className="mx-8">
            <div className="flex flex-col gap-2 mt-7">
              <label
                htmlFor="email"
                className="text-left text-[14px] font-medium"
              >
                Email
              </label>
              <input
                className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323] placeholder:text-[14px] w-full"
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
                className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323] w-full"
                type="password"
                name="password"
              />
            </div>

            <button
              onClick={() => navigate("/dashboard-home")}
              type="submit"
              className="mt-7 bg-white text-black w-full h-9 rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center items-center mt-8 mb-8">
            <p className="text-[#A3A3A3] text-[14px]">Don't have an account?</p>
            <Link
              to="/sign-up"
              className="text-[#A3A3A3] text-[14px] underline underline-offset-2 ml-1"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="hidden md:block bg-[#232323]" />
      </div>

      <p className="mt-7 text-[#A3A3A3] text-[14px] text-center max-w-[700px]">
        By clicking continue, you agree to our{" "}
        <a className="underline underline-offset-2" href="">
          Terms of Service
        </a>{" "}
        and{" "}
        <a className="underline underline-offset-2" href="">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export default SignIn;
