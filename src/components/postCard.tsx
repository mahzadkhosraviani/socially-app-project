import type { Post } from "../services/postService";

type Props = {
  post: Post;
};

// Extract username from email — e.g. "peyman@gmail.com" → "peyman"
const getUsernameFromEmail = (email: string) => email.split("@")[0];

const timeAgo = (dateString: string) => {
  const diff = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

export default function PostCard({ post }: Props) {
  const { author, content, createdAt, _count } = post;
  const username = getUsernameFromEmail(author.email);

  return (
    <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl p-4 w-full shadow-md">
      <div className="flex items-center gap-3 mb-3">
        {author.image ? (
          <img
            src={author.image}
            alt={author.name}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-[#6b4f3a] flex items-center justify-center text-white font-bold text-sm shrink-0">
            {author.name[0].toUpperCase()}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-gray-900 dark:text-white font-semibold text-sm">
            {author.name}
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-xs">
            @{username}
          </span>
          <span className="text-gray-300 dark:text-gray-600 text-xs">•</span>
          <span className="text-gray-400 dark:text-gray-500 text-xs">
            {timeAgo(createdAt)}
          </span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {content}
      </p>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>{_count.likes}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>{_count.comments}</span>
        </div>
      </div>
    </div>
  );
}
