import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Heart,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const AdviceCard = ({ advice }) => {
  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="bg-[#F8F4E8]/90 backdrop-blur-md rounded-3xl border border-[#64513B]/10 shadow-md overflow-hidden"
    >
      {/* Cover */}
      <div className="relative h-44 bg-gradient-to-br from-[#C9A86A]/20 to-[#3B727C]/20 flex items-center justify-center">
        {advice.image ? (
          <img
            src={advice.image}
            alt={advice.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <BookOpen
            size={60}
            className="text-[#3B727C]/60"
          />
        )}

        <span className="absolute top-4 right-4 bg-[#3B727C] text-white text-xs px-3 py-1 rounded-full">
          Senior Advice
        </span>
      </div>

      <div className="p-6">

        {/* Author */}

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B727C] to-[#C9A86A]" />

          <div>

            <h4 className="font-bold text-[#64513B]">
              {advice.author}
            </h4>

            <p className="text-xs text-[#64513B]/60">
              {advice.department} • {advice.year}
            </p>

          </div>

        </div>

        {/* Title */}

        <h2 className="mt-5 text-2xl font-bold text-[#64513B]">
          {advice.title}
        </h2>

        {/* Preview */}

        <p className="mt-3 text-[#64513B]/70 leading-7">
          {advice.preview}
        </p>

        {/* Metadata */}

        <div className="flex flex-wrap gap-5 mt-6 text-sm text-[#64513B]/70">

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {advice.readTime} min read
          </div>

          <div className="flex items-center gap-2">
            <Heart size={16} />
            {advice.likes}
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            {advice.comments}
          </div>

        </div>

        {/* Tags */}

        <div className="flex flex-wrap gap-2 mt-5">

          {advice.tags.map((tag) => (

            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#E0D3AF] text-xs font-medium"
            >
              #{tag}
            </span>

          ))}

        </div>

        {/* Rating */}

        <div className="flex items-center gap-1 mt-5 text-[#C9A86A]">

          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />

          <span className="ml-2 text-sm font-medium">
            Highly Recommended
          </span>

        </div>

        {/* CTA */}

        <button
          className="mt-6 w-full bg-[#3B727C] hover:bg-[#2f5d66] transition text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          Read Story
          <ArrowRight size={18} />
        </button>

      </div>
    </motion.article>
  );
};

export default AdviceCard;