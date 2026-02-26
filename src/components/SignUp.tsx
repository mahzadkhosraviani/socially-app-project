import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/authService";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormData = z.infer<typeof schema>;
function Spinner() {
  return (
    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
  );
}
function SignUp() {
  const navigate = useNavigate();
  const [toast, setToast] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await authService.register(data);
      navigate("/dashboard-home");
    } catch (e: any) {
      const msg = e?.response?.data?.message ?? "Invalid fields";
      setToast(msg);

      setTimeout(() => setToast(null), 3000);
    
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#262626] w-full  px-4 py-10">
        {toast && (
          <div className=" mt-4 mb-2 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300 flex items-center justify-between">
            <span>{toast}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="ml-4 text-red-300 hover:text-red-200"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}
        <div className="w-full max-w-[420px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#383838] transition-all duration-300">
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-red-500 text-xs">
                    {errors.name.message}
                  </p>
                )}
                <div className="flex flex-col gap-2 mt-7">
                  <label
                    htmlFor="email"
                    className="text-left text-[14px] font-medium"
                  >
                    Email
                  </label>
                  <input
                    className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323] placeholder:text-[14px]"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-red-500 text-xs">
                    {errors.email.message}
                  </p>
                )}
                <div className="flex flex-col gap-2 mt-6">
                  <label
                    htmlFor="password"
                    className="text-left text-[14px] font-medium"
                  >
                    Password
                  </label>
                  <input
                    className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323]"
                    type="password"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-7 text-center bg-white text-black w-full h-9 px-2 rounded-lg"
                >
                   {isSubmitting ? (
                  <>
                    <Spinner />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  "Create Account"
                )}
                </button>
              </div>
            </form>
            <div className="flex flex-row justify-center items-center mt-8 mb-8">
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
    </>
  );
}

export default SignUp;
