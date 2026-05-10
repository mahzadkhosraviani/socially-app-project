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
export default function NotificationComment({ data }: Props) {
  const isUnread = !data.read;
  const username = data?.creator.email.split("@")[0];
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-start gap-3 px-4 py-4 ${isUnread ? " bg-gray-100  dark:bg-[#252525]" : "bg-white dark:bg-[#171717]"}`}
    >
      <div
        className={`w-10 h-10 rounded-full ${setAvatarColors(data.creator.name)} flex items-center justify-center text-white font-bold text-sm shrink-0`}
      >
        {data.creator.name[0]}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span
            onClick={() => {
              navigate(`/dashboard-profile/${username}`);
            }}
            className="text-sm text-gray-800 dark:text-gray-200"
          >
            <span className="font-bold text-base">{data.creator.name}</span>

            <span className="text-[#838282]"> commented on your post.</span>
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <div
            className={`${isUnread ? "mb-2 pl-3" : "bg-gray-100 ml-1  dark:bg-[#2a2a2a] rounded-md pl-3 py-2 mb-3 inline-block"}`}
          >
            <p className="text-sm text-black dark:text-white mb-1 ">
              {data.post.content}
            </p>
          </div>
          <div
            className={`${isUnread ? "mb-2 pl-3" : "bg-gray-100 ml-1  dark:bg-[#2a2a2a] rounded-md pl-3 py-2 mb-3 inline-block"}`}
          >
            <p className="text-sm text-black dark:text-white mb-1">
              {data.comment.content}
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 ml-1">
          {timeAgo(data.createdAt)}
        </p>
      </div>
      {isUnread && (
        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
      )}
    </div>
  );
}
