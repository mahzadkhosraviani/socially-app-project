import toast from "react-hot-toast";

interface Props {
  t: any;
  message: string;
  type: "success" | "error";
}

const CustomToast = ({ t, message, type }: Props) => {
  const icon =
    type === "success"
      ? "/src/assets/tick.png"
      : "/src/assets/closebtn-removebg-preview.png";

  return (
    <div
      className={`${
        t.visible ? "animate-custom-enter" : "animate-custom-leave"
      } transition ease-in-out`}
    >
      <div className="rounded-lg pr-30 py-4 bg-[#191919] border border-[#383838] font-bold text-xs text-[#FAFAFA] text-left">
        <div className="flex flex-row items-center">
          <button
            type="button"
            onClick={() => toast.dismiss(t.id)}
            className="ml-2 mr-2"
          >
            <img src={icon} alt="close btn" className="w-4 h-4" />
          </button>

          <span>{message}</span>
        </div>
      </div>
    </div>
  );

};

export default CustomToast;
