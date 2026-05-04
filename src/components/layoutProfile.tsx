// import Navbar from "./Navbar";
// import Profile from "./profile";

// const LayoutProfile = ({ children }) => {
//   return (
//     <div className=" bg-white dark:bg-[#0A0A0A] flex flex-col">
//       <Navbar />

//       <div className="flex flex-row  gap-6 mt-7 ">
//         <div className="hidden md:block ">
//           <Profile />
//         </div>
//         <div className="flex flex-1 flex-col  md:mx-auto w-full mx-5 mb-3  ">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutProfile;
import Navbar from "./Navbar";
import Profile from "./profile";

const LayoutProfile = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#0A0A0A] ">
      <Navbar />

      <div className="flex flex-1 overflow-hidden flex-row gap-6 ">
        <aside className="hidden md:block ">
          <div className="sticky md:pt-8  overflow-hidden ">
            <Profile />
          </div>
        </aside>
       
     
        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-1 flex-col md:pt-8 md:mx-auto  md:w-full mx-2 mb-3  ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutProfile;