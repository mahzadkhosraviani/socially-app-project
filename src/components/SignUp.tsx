import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(15, "Password must be at last 15 characters long"),
});

type FormData = z.infer<typeof schema>;

function Spinner() {
  return (
    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black dark:border-white/40 dark:border-t-white" />
  );
}

function SignUp() {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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

  const onSubmit = async (data: FormData) => {
    try {
      await registerUser(data.name, data.email, data.password);
      navigate("/dashboard-home");
    } catch (e: any) {
      showToast(e?.response?.data?.error, "error");
      console.log(e.response);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-[#262626] w-full px-4 py-10">
        <div className="w-full max-w-[420px] md:max-w-[900px] grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gray-200 dark:border-[#383838] transition-all duration-300 mt-4 shadow-lg">
          <div className="rounded-l-xl bg-white dark:bg-[#191919] text-gray-900 dark:text-white">
            <div className="text-center flex flex-col gap-1.5 mt-7">
              <p className="text-gray-900 dark:text-[#FAFAFA] text-2xl font-bold">
                Create your account
              </p>
              <p className="text-gray-500 dark:text-[#A3A3A3] text-[14px] max-w-[700px]">
                Enter your email below to create your account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mx-8">
                <div className="flex flex-col gap-2 mt-7">
                  <label
                    htmlFor="name"
                    className="text-left text-[14px] font-medium text-gray-700 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    className="h-9 px-3 rounded-lg border border-gray-300 bg-white dark:border-[#383838] dark:bg-[#232323] placeholder:text-gray-400 dark:placeholder:text-[#727272] text-gray-900 dark:text-white placeholder:text-[14px]"
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
                    className="text-left text-[14px] font-medium text-gray-700 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    className="h-9 px-3 rounded-lg border border-gray-300 bg-white dark:border-[#383838] dark:bg-[#232323] placeholder:text-gray-400 dark:placeholder:text-[#727272] text-gray-900 dark:text-white placeholder:text-[14px]"
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
                    className="h-9 px-3 rounded-lg border border-gray-300 bg-white dark:border-[#383838] dark:bg-[#232323] text-gray-900 dark:text-white"
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
                  className={`mt-7 w-full h-9 rounded-lg flex items-center justify-center gap-2
                    ${
                      isSubmitting
                        ? "bg-gray-300 dark:bg-[#717272] text-gray-700 font-semibold dark:text-black cursor-not-allowed"
                        : "bg-black dark:bg-[#FAFAFA] text-white font-semibold dark:text-black"
                    }`}
                >
                  {isSubmitting && <Spinner />}
                  <span>Create Account</span>
                </button>
              </div>
            </form>
            <div className="flex flex-row justify-center items-center mt-8 mb-8">
              <p className="text-center text-gray-500 dark:text-[#A3A3A3] text-[14px]">
                Already have an account?
              </p>
              <Link
                to="/sign-in"
                className="text-gray-500 dark:text-[#A3A3A3] text-[14px] underline underline-offset ml-0.5"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-7 text-gray-500 dark:text-[#A3A3A3] text-[14px] text-center">
            By clicking continue, you agree to our{" "}
            <a className="underline underline-offset" href="">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline underline-offset" href="">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
