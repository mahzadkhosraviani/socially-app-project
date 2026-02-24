interface EditButtonProps {
  label: string;
}

const EditButton = ({ label }: EditButtonProps) => {
  return (
    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-[#262626] dark:text-white hover:dark:bg-[#262626] transition">
      {label}
    </button>
  );
};

export default EditButton;
