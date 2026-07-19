import React from "react";
import { Trophy, Users, Calendar, BookOpen } from "lucide-react";

const CommunityStats = () => {
  return (
    <div className="bg-[#F8F4E8] rounded-3xl border border-[#64513B]/10 shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-[#C9A86A]" size={22} />
        <h3 className="text-xl font-bold text-[#64513B]">
          Community Stats
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-[#E0D3AF]/40 rounded-2xl p-4 text-center">
          <Users className="mx-auto mb-2 text-[#3B727C]" size={22} />
          <p className="text-2xl font-bold">124</p>
          <p className="text-xs opacity-70">
            Active Students
          </p>
        </div>

        <div className="bg-[#E0D3AF]/40 rounded-2xl p-4 text-center">
          <Calendar className="mx-auto mb-2 text-[#3B727C]" size={22} />
          <p className="text-2xl font-bold">6</p>
          <p className="text-xs opacity-70">
            Events Today
          </p>
        </div>

        <div className="bg-[#E0D3AF]/40 rounded-2xl p-4 text-center">
          <Users className="mx-auto mb-2 text-[#3B727C]" size={22} />
          <p className="text-2xl font-bold">18</p>
          <p className="text-xs opacity-70">
            Clubs
          </p>
        </div>

        <div className="bg-[#E0D3AF]/40 rounded-2xl p-4 text-center">
          <BookOpen className="mx-auto mb-2 text-[#3B727C]" size={22} />
          <p className="text-2xl font-bold">42</p>
          <p className="text-xs opacity-70">
            Stories
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#3B727C] to-[#2B5961] p-5 text-white">
        <p className="text-sm opacity-90">
          Your Community XP
        </p>

        <h2 className="text-3xl font-bold mt-1">
          820 XP
        </h2>

        <p className="text-xs opacity-80 mt-2">
          Rank #14 • Top 10%
        </p>
      </div>
    </div>
  );
};

export default CommunityStats;