import { useNavigate } from "react-router-dom";
interface EditButtonProps {
  label: string;
  onClick?: () => void;
}

const EditButton = ({ label, onClick }: EditButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border bg-[#0A0A0A] text-[#FAFAFA] border-gray-300 rounded-lg hover:bg-gray-400 dark:border-[#262626] dark:bg-[#FAFAFA] dark:text-[#0A0A0A] hover:dark:bg-[#262626] transition"
    >
      {label}
    </button>
  );
};

export default EditButton;
