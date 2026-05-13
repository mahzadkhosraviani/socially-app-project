import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from "../services/authService";
import { getErrorMessage } from "../utils/getErrorMessage";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(15, "Password must be at last 15 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

function Spinner() {
  return (
    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black dark:border-white/40 dark:border-t-white" />
  );
}

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

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
                <img src={icon} alt="close btn" className="w-4 h-4" />
              </button>

              <span>{message}</span>
            </div>
          </div>
        </div>
      ),
      { duration: 3000 },
    );
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate("/dashboard-home");
    } catch (e: any) {
      console.log("Error object:", e);
      console.log("e.response:", e.response);
      console.log("e.response?.data:", e.response?.data);
      showToast(e?.response?.data?.error || "Something went wrong", "error");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-[#262626] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gray-200 dark:border-[#383838] shadow-lg">
        <div className="bg-white dark:bg-[#191919] text-gray-900 dark:text-white">
          <div className="text-center flex flex-col gap-1.5 mt-7">
            <p className="text-gray-900 dark:text-[#FAFAFA] text-2xl font-bold">
              Welcome back
            </p>
            <p className="text-gray-500 dark:text-[#A3A3A3] max-w-[700px]">
              Login to your Socially account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-8">
              <div className="flex flex-col gap-2 mt-7">
                <label
                  htmlFor="email"
                  className="text-left text-[14px] font-medium text-gray-700 dark:text-white"
                >
                  Email
                </label>
                <input
                  className="h-9 px-3 rounded-lg border border-gray-300 bg-white dark:border-[#383838] dark:bg-[#232323] placeholder:text-gray-400 dark:placeholder:text-[#727272] text-gray-900 dark:text-white placeholder:text-[14px] w-full"
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
                  className="text-left text-[14px] font-medium text-gray-700 dark:text-white"
                >
                  Password
                </label>
                <input
                  className="h-9 px-3 rounded-lg border border-gray-300 bg-white dark:border-[#383838] dark:bg-[#232323] text-gray-900 dark:text-white w-full"
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
                className={`mt-7 w-full h-9 rounded-lg flex items-center justify-center gap-2 font-semibold
                  ${
                    isSubmitting
                      ? "bg-gray-300 dark:bg-[#717272] text-gray-700 dark:text-black cursor-not-allowed"
                      : "bg-black dark:bg-[#FAFAFA] text-white dark:text-black"
                  }`}
              >
                {isSubmitting && <Spinner />}
                <span>Login</span>
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center mt-8 mb-8">
            <p className="text-gray-500 dark:text-[#A3A3A3] text-[14px]">
              Don't have an account?
            </p>
            <Link
              to="/sign-up"
              className="text-gray-500 dark:text-[#A3A3A3] text-[14px] underline underline-offset-2 ml-1"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-7 text-gray-500 dark:text-[#A3A3A3] text-[14px] text-center max-w-[700px]">
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

{
  /* return (
    <div className="min-h-screen w-full bg-[#262626] flex flex-col items-center justify-center px-4 py-10">
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
      <div className="w-full max-w-[420px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#383838]">
        <div className="bg-[#191919] text-white">
          <div className="text-center flex flex-col gap-1.5 mt-7">
            <p className="text-[#FAFAFA] text-2xl font-bold">Welcome back</p>
            <p className="text-[#A3A3A3] max-w-[700px]">
              Login to your Socially account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  className="h-9 px-3 rounded-lg border border-[#383838] bg-[#232323] w-full"
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
                className="mt-7 bg-white text-black w-full h-9 rounded-lg"
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    <span>Logging in...</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>

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
    </>
  ); */
}

export default SignIn;
