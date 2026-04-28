import { useState } from "react";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/authContext";
import type { Post, Comment } from "../services/postService";

type Props = {
  post: Post;
};

// Helper functions
const getUsernameFromEmail = (email: string) => email.split("@")[0];

const timeAgo = (dateString: string) => {
  const diff = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

export default function PostCard({ post }: Props) {
  const { toggleLike, addComment } = usePost();
  const { user } = useAuth();
  const [showComments, setShowComments] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentUserId = user?.id || user?.authorId;

  const isLiked = post.likes.some(
    (like) => like.authorId === currentUserId || like.userId === currentUserId
  );

  const handleLike = () => toggleLike(post.id);
  const toggleComments = () => setShowComments(!showComments);

  const handleAddComment = async () => {
    if (!commentContent.trim() || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await addComment(post.id, commentContent);
      setCommentContent("");
    } catch (err) {
      console.error("Failed to add comment", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { author, content, createdAt, _count, comments } = post;
  const username = getUsernameFromEmail(author.email);

  return (
    <div className="bg-white border border-gray-200 dark:bg-[#0A0A0A] dark:border-[#262626] rounded-2xl px-6 pt-5 md:w-160 mt-7">
      {/* Post header */}
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

      {/* Post content */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {content}
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-5 border-b border-gray-200 dark:border-[#262626] pb-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-sm transition-colors cursor-pointer ${
            isLiked ? "text-red-500" : "text-gray-400 dark:text-gray-500"
          } hover:text-red-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>{_count.likes}</span>
        </button>

        <button
          onClick={toggleComments}
          className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm hover:text-emerald-500 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>{_count.comments}</span>
        </button>
      </div>

      {/* Inline comments section */}
      {showComments && (
        <div className=" mt-3  dark:border-[#262626]">
          {/* Comments list */}
          <div className="max-h-64 overflow-y-auto space-y-3 mb-2">
            {comments.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm py-2">
                No comments yet. Be the first!
              </p>
            ) : (
              comments.map((comment: Comment) => (
                <div key={comment.id} className="flex gap-3">
                  {comment.author.image ? (
                    <img
                      src={comment.author.image}
                      alt={comment.author.name}
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[#6b4f3a] flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {comment.author.name[0].toUpperCase()}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-xs dark:text-white">
                        {comment.author.name}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500 text-xs">
                        @{getUsernameFromEmail(comment.author.email)}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600 text-xs">•</span>
                      <span className="text-gray-400 dark:text-gray-500 text-xs">
                        {timeAgo(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs mt-1">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Comment input */}
          <div className="flex items-start gap-2 pt-6 border-t border-gray-200 dark:border-[#262626]">
            {user?.image ? (
              <img
                src={user.image}
                alt={user?.name}
                className="w-7 h-7 rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </div>
            )}
            <div className="flex-1">
              <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Write a comment..."
                rows={1}
                className="w-full px-2 py-4 border border-gray-200 dark:border-[#262626] rounded-lg bg-white dark:bg-[#0A0A0A] dark:text-white text-xs resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <div className="flex justify-end mt-2 mb-4">
                <button
                  onClick={handleAddComment}
                  disabled={isSubmitting || !commentContent.trim()}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-medium rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Posting..." : "Comment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}