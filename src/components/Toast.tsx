import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in`}>
      {message}
    </div>
  );
}