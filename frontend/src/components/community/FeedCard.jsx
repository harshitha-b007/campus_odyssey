import React, { useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  X,
} from "lucide-react";

const FeedCard = ({ post }) => {
  const likeKey = `liked-${post.id}`;
  const bookmarkKey = `bookmark-${post.id}`;

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const savedLike = localStorage.getItem(likeKey);
    const savedBookmark = localStorage.getItem(bookmarkKey);

    if (savedLike === "true") {
      setLiked(true);
      setLikes(post.likes + 1);
    }

    if (savedBookmark === "true") {
      setBookmarked(true);
    }
  }, []);

  const toggleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes((prev) => prev + 1);
      localStorage.setItem(likeKey, "true");
    } else {
      setLiked(false);
      setLikes((prev) => prev - 1);
      localStorage.setItem(likeKey, "false");
    }
  };

  const toggleBookmark = () => {
    const value = !bookmarked;
    setBookmarked(value);
    localStorage.setItem(bookmarkKey, value);
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title || "CampusQuest",
      text: post.caption,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const addComment = () => {
    if (!comment.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        text: comment,
      },
    ]);

    setComment("");
  };

  return (
    <>
      <div className="bg-[#F8F4E8] rounded-3xl shadow-sm border border-[#64513B]/10 overflow-hidden">

        <div className="p-6">

          <div className="flex items-center gap-4 mb-4">

            <div className="w-12 h-12 rounded-full bg-[#C9A86A]" />

            <div>
              <h3 className="font-bold">
                {post.author}
              </h3>

              <p className="text-xs opacity-60">
                {post.dept}
              </p>
            </div>

          </div>

          <p>{post.caption}</p>

        </div>

        {post.image && (
          <img
            src={post.image}
            alt=""
            className="w-full h-72 object-cover"
          />
        )}

        <div className="flex justify-around py-4">

          {/* Like */}

          <button
            onClick={toggleLike}
            className={`flex items-center gap-2 ${
              liked
                ? "text-red-500"
                : "text-[#64513B]"
            }`}
          >
            <Heart
              fill={liked ? "currentColor" : "none"}
              size={22}
            />

            {likes}
          </button>

          {/* Comment */}

          <button
            onClick={() => setShowComments(true)}
            className="flex items-center gap-2"
          >
            <MessageCircle size={22} />
            {comments.length}
          </button>

          {/* Bookmark */}

          <button
            onClick={toggleBookmark}
            className={`${
              bookmarked
                ? "text-yellow-500"
                : ""
            }`}
          >
            <Bookmark
              fill={bookmarked ? "currentColor" : "none"}
            />
          </button>

          {/* Share */}

          <button onClick={handleShare}>
            <Share2 />
          </button>

        </div>

      </div>

      {/* Comments Modal */}

      {showComments && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-3xl w-[450px] p-6">

            <div className="flex justify-between mb-5">

              <h2 className="font-bold text-xl">
                Comments
              </h2>

              <button
                onClick={() => setShowComments(false)}
              >
                <X />
              </button>

            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto">

              {comments.length === 0 && (
                <p className="text-sm opacity-60">
                  No comments yet.
                </p>
              )}

              {comments.map((c) => (
                <div
                  key={c.id}
                  className="bg-gray-100 rounded-xl p-3"
                >
                  {c.text}
                </div>
              ))}

            </div>

            <div className="flex gap-3 mt-5">

              <input
                value={comment}
                onChange={(e) =>
                  setComment(e.target.value)
                }
                placeholder="Write a comment..."
                className="flex-1 border rounded-xl px-4 py-2"
              />

              <button
                onClick={addComment}
                className="bg-[#3B727C] text-white px-5 rounded-xl"
              >
                Send
              </button>

            </div>

          </div>

        </div>

      )}
    </>
  );
};

export default FeedCard;