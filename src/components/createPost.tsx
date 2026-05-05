import { useState } from "react";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/authContext";
import { postService } from "../services/postService";
import setAvatarColors from "../utils/setAvatarColors";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { refetch } = usePost();
  const { user } = useAuth();

  const handlePost = async () => {
    if (!content.trim()) return;
    if (content.length < 5) {
      setError("Post must be at least 5 characters");
      return;
    }
    setIsPosting(true);
    setError(null);

    try {
      await postService.createPost(content);
      setContent("");
      await refetch();
      toast.success("Post created successfully!");
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || "Failed to create post";
      setError(message);
      toast.error(message);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-lg dark:bg-[#171717] dark:border-[#262626] rounded-2xl p-4 w-full max-w-200">
      <div className="flex items-start gap-3">
        {user?.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className={`w-10 h-10 rounded-full  flex items-center justify-center text-white font-bold text-sm shrink-0 ${setAvatarColors(user.name)}`}>
            {user?.name?.[0]?.toUpperCase() || "U"}
          </div>
        )}
        <input
          type="text"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 border-none outline-none dark:text-gray-300 bg-transparent"
        />
      </div>
      <div className="h-10" />
      <div className="border-t border-gray-200 dark:border-[#262626] my-3" />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="flex justify-end">
        <button
          onClick={handlePost}
          disabled={isPosting || !content.trim() || content.length < 5}
          className="flex items-center gap-2 border bg-[#0A0A0A] border-gray-300 dark:border-[#3a3a3a] dark:bg-white text-white dark:text-black text-sm font-medium px-4 py-2 rounded-xl cursor-pointer hover:bg-black/80 dark:hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPosting ? (
            "Posting..."
          ) : (
            <>
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
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Post
            </>
          )}
        </button>
      </div>
    </div>
  );
}