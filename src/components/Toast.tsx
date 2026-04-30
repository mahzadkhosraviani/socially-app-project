import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  bgColor?: string;
  onClose: () => void;
};

export default function Toast({ message, type, bgColor, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bg = bgColor || "bg-black";

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 ${bg} text-white px-4 py-3 rounded-lg shadow-lg text-sm animate-fade-in flex items-center gap-3 border border-gray-600 min-w-[250px] max-w-[400px]`}
    >
      {type === "success" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span className="flex-1">{message}</span>
    </div>
  );
}