import { useDebugValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout,loading } = useAuth();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
 
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (!savedTheme) {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (systemDark) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    }
  }, []);
  const handleToggle = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <div className=" flex justify-between items-center py-5 px-4  bg-white/60 dark:bg-black/20 md:pr-13 md:pl-20  border-b-[#e3e3e3] border dark:border-b-[#1c1c1c]  ">
        <span className="dark:text-white text-xl md:text-xl tracking-wide font-semibold font-mono ">
          Socially
        </span>

        <div className="flex gap-4 md:gap-8">
          <button
            onClick={handleToggle}
            className="flex justify-center items-center dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 dark:border-[#262626] w-10 h-8 dark:border cursor-pointer py-1 px-2 md:py-2 rounded-md text-md md:text-xl shadow-lg border border-[#E5E5E5]"
          >
            {!darkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-brightness-high dark:hidden "
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            )}
            {darkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="#ffff"
                className="bi bi-moon hidden dark:block "
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden dark:hover:bg-[#cccaca] hover:bg-[#2d2d2d]  transition duration-300 lg:hidden dark:text-black dark:bg-white text-white bg-black flex justify-center items-center w-10 h-8 cursor-pointer py-1 px-2 md:py-2 rounded-md text-md md:text-xl shadow-lg"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 3h12M2 8h12M2 13h12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            onClick={() => navigate(user ? "/dashboard-home" : "/")}
            className="hidden dark:text-white text-sm md:text-base dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-1 px-2   rounded-lg cursor-pointer md:flex gap-1 justify-center items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-house-door dark:hidden"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#ffff"
              className="bi bi-house-door  dark:block hidden"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
            Home
          </button>

          {!user && (
            <button
              onClick={() => navigate("/sign-in")}
              className="hidden md:block dark:hover:bg-[#cccaca] hover:bg-[#2d2d2d]  transition duration-300  dark:text-black dark:bg-white cursor-pointer bg-black text-white py-1 px-3  rounded-md text-sm md:text-base"
            >
              Sign In
            </button>
          )}
          {user && (
            <>
              <button
                onClick={() => navigate("/dashboard-notification")}
                className="hidden  dark:text-white text-sm md:text-base dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-1 px-2 rounded-lg    cursor-pointer md:flex justify-center items-center gap-1"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    className="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                  </svg>
                </span>
                Notification
              </button>
              <button
                onClick={() => navigate("/dashboard-profile")}
                className="hidden dark:text-white text-sm md:text-base rounded-lg  dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-1 px-2  cursor-pointer md:flex justify-center items-center gap-1"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </span>
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="hidden rounded-lg  dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-1 px-2   md:block cursor-pointer dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      <>
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-80 shadow-xl dark:bg-[#0A0A0A] bg-white p-6 flex flex-col gap-8 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between ">
            <p className="dark:text-white">Menu</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl dark:text-white"
            >
              ✕
            </button>
          </div>
          <button
            onClick={() => navigate(user ? "/dashboard-home" : "/")}
            className="dark:text-white rounded-lg  dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-2 px-4 text-sm md:text-base  cursor-pointer flex gap-1 justify-center items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-house-door dark:hidden"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#ffff"
              className="bi bi-house-door  dark:block hidden"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
            Home
          </button>
          {!user && (
            <button
              onClick={() => navigate("/sign-in")}
              className="dark:text-black hover:bg-[#cccaca]  transition duration-300  dark:bg-white cursor-pointer bg-black text-white py-2 px-4 md:py-2 md:px-4 rounded-md text-sm md:text-base"
            >
              Sign In
            </button>
          )}
          {user && (
            <>
              <button
                onClick={() => navigate("/dashboard-notification")}
                className="dark:text-white rounded-lg  dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-2 px-4 text-sm md:text-base cursor-pointer flex justify-center items-center gap-1"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    className="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                  </svg>
                </span>
                Notification
              </button>
              <button
                onClick={() => navigate("/dashboard-profile")}
                className="dark:text-white rounded-lg  dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-2 px-4 text-sm md:text-base cursor-pointer flex justify-center items-center gap-1"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </span>
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-lg  dark:hover:bg-[#171717] hover:bg-[#f4f2f2] transition duration-300 py-2 px-4 dark:text-white self-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </>

     
    </>
  );
}
export default Navbar;
