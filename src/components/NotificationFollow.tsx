import { useNavigate } from "react-router-dom";
import setAvatarColors from "../utils/setAvatarColors";

type Props = {
  data: any;
};

const timeAgo = (dateString: string) => {
  const diff = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;

  return `${Math.floor(diff / 86400)} days ago`;
};

export default function NotificationFollow({ data }: Props) {
  const isUnread = !data.read;
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-start gap-3 px-5 py-5 ${isUnread ? "bg-gray-100 dark:bg-[#252525]" : "bg-white dark:bg-[#171717]"}`}
    >
      <div className={`w-10 h-10 rounded-full ${setAvatarColors(data.creator.name)}  flex items-center justify-center text-white font-bold text-sm shrink-0`}>
        {data.creator.name[0]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-blue-400 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          <span
            onClick={() => {
              navigate(`/dashboard-profile/${data.creator.name}`, {
                state: { id: data.creator.id },
              });
            }}
            className="text-sm text-gray-800 dark:text-gray-200"
          >
            <span className="font-bold text-base">{data.creator.name}</span>{" "}
            <span className="text-[#838282]">started following you.</span>
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 ml-1 mt-3">
          {timeAgo(data.createdAt)}
        </p>
      </div>
      {isUnread && (
        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
      )}
    </div>
  );
}
