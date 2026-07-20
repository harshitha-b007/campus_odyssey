import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ClubCard = ({ club }) => {
  const [joined, setJoined] = useState(false);

const handleJoin = () => {
  const ok = window.confirm(`Do you want to join ${club.name}?`);

  if (ok) {
    setJoined(true);
  }
};
  return (
    <motion.div
      layout
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="bg-[#F8F4E8]/90 backdrop-blur-md rounded-3xl border border-[#64513B]/10 shadow-md overflow-hidden"
    >
      {/* Banner */}
      <div className="relative h-40 bg-gradient-to-br from-[#3B727C]/20 to-[#C9A86A]/20 flex items-center justify-center">

        {club.image ? (
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-6xl">{club.icon}</span>
        )}

        <span className="absolute top-4 right-4 bg-[#3B727C] text-white text-xs px-3 py-1 rounded-full">
          Active
        </span>

      </div>

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-2xl font-bold text-[#64513B]">
              {club.name}
            </h2>

            <p className="text-[#64513B]/70 mt-2">
              {club.description}
            </p>

          </div>

          <Sparkles
            className="text-[#C9A86A]"
            size={22}
          />

        </div>

        {/* Info */}

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="flex items-center gap-2 text-sm">
            <Users size={16} />
            {club.members} Members
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} />
            {club.status}
          </div>

          <div className="flex items-center gap-2 text-sm col-span-2">
            <MapPin size={16} />
            {club.location}
          </div>

        </div>

        {/* AI Match */}

        <div className="mt-6">

          <div className="flex justify-between text-sm mb-2">

            <span>Quest AI Match</span>

            <span className="font-semibold">
              {club.match}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-[#E0D3AF] overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${club.match}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-[#3B727C]"
            />

          </div>

        </div>

        {/* Tags */}

        <div className="flex flex-wrap gap-2 mt-5">

          {club.tags.map((tag) => (

            <span
              key={tag}
              className="bg-[#E0D3AF] px-3 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <button
  onClick={handleJoin}
  disabled={joined}
  className={`flex-1 py-3 rounded-full font-semibold transition ${
    joined
      ? "bg-green-600 text-white cursor-default"
      : "bg-[#3B727C] hover:bg-[#2d5f67] text-white"
  }`}
>
  {joined ? "✅ Joined" : "Join Club"}
</button>

          <button
            className="w-14 flex items-center justify-center bg-[#E0D3AF] rounded-full hover:bg-[#d7c79d] transition"
          >
            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default ClubCard;