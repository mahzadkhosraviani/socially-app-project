import { useState } from "react";
import { usePost } from "../context/PostContext";
import PostCard from "./postCard";
import Toast from "./Toast";


function PostSkeleton() {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl p-4 w-full animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-gray-200 dark:bg-[#2a2a2a]" />
        <div className="flex flex-col gap-2">
          <div className="w-24 h-3 rounded bg-gray-200 dark:bg-[#2a2a2a]" />
          <div className="w-36 h-3 rounded bg-gray-200 dark:bg-[#2a2a2a]" />
        </div>
      </div>
      <div className="w-full h-3 rounded bg-gray-200 dark:bg-[#2a2a2a] mb-2" />
      <div className="w-2/3 h-3 rounded bg-gray-200 dark:bg-[#2a2a2a]" />
    </div>
  );
}

export default function PostFeed() {
  const { posts, loading, error, refetch } = usePost();
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-6 text-center">
        <p className="text-red-400 text-sm mb-3">{error}</p>
        <button
          onClick={refetch}
          className="text-xs text-red-300 border border-red-500/30 px-3 py-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] px-4 py-10 text-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          No posts yet. Be the first to post!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onShowToast={showToast} />
        ))}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}