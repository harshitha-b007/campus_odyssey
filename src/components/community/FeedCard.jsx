import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreHorizontal,
} from "lucide-react";

const FeedCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const likeCount = liked ? post.likes + 1 : post.likes;

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="bg-[#F8F4E8]/90 backdrop-blur-md rounded-3xl border border-[#64513B]/10 shadow-md overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#3B727C] to-[#C9A86A]" />

          <div>
            <h3 className="font-bold text-[#64513B]">
              {post.author}
            </h3>

            <p className="text-xs text-[#64513B]/60">
              {post.dept} • {post.time}
            </p>
          </div>
        </div>

        <button>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Caption */}
      <div className="px-6 pt-5">
        <p className="leading-7 text-[#64513B]">
          {post.caption}
        </p>
      </div>

      {/* Image Placeholder */}
      {post.image ? (
        <img
          src={post.image}
          alt={post.caption}
          className="mt-5 h-72 w-full object-cover"
        />
      ) : (
        <div className="mt-5 h-64 bg-gradient-to-br from-[#3B727C]/10 to-[#C9A86A]/10 flex items-center justify-center text-[#64513B]/40">
          Community Image
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-6">

          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 transition ${
              liked
                ? "text-red-500"
                : "text-[#64513B] hover:text-red-500"
            }`}
          >
            <Heart
              size={20}
              fill={liked ? "currentColor" : "none"}
            />

            <span className="text-sm font-medium">
              {likeCount}
            </span>
          </button>

          <button className="flex items-center gap-2 text-[#64513B] hover:text-[#3B727C] transition">
            <MessageCircle size={20} />

            <span className="text-sm">
              {post.comments}
            </span>
          </button>

        </div>

        <div className="flex items-center gap-5">

          <button
            onClick={() => setSaved(!saved)}
            className={`transition ${
              saved
                ? "text-[#C9A86A]"
                : "text-[#64513B]"
            }`}
          >
            <Bookmark
              size={20}
              fill={saved ? "currentColor" : "none"}
            />
          </button>

          <button className="text-[#64513B] hover:text-[#3B727C] transition">
            <Share2 size={20} />
          </button>

        </div>
      </div>
    </motion.article>
  );
};

export default FeedCard;