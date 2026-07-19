import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

import FeedCard from "../components/community/FeedCard";
import EventCard from "../components/community/EventCard";
import GemCard from "../components/community/GemCard";
import AdviceCard from "../components/community/AdviceCard";
import ClubCard from "../components/community/ClubCard";
import QuestAI from "../components/community/QuestAI";
import CommunityStats from "../components/community/CommunityStats";

import {
  STORIES,
  EVENTS,
  GEMS,
  ADVICE,
  CLUBS,
} from "../data/communityData";

const TABS = [
  "Feed",
  "Events",
  "Senior Advice",
  "Hidden Gems",
  "Clubs",
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("Feed");
  const [search, setSearch] = useState("");

  const filteredStories = useMemo(() => {
    return STORIES.filter((item) =>
      `${item.author} ${item.title} ${item.caption}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredGems = useMemo(() => {
    return GEMS.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredAdvice = useMemo(() => {
    return ADVICE.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredClubs = useMemo(() => {
    return CLUBS.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="campus-map-bg min-h-screen text-[#64513B]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-3 font-serif">
            Community
          </h1>

          <p className="opacity-70 text-lg">
            Discover clubs, campus traditions, events and student stories.
          </p>
        </div>

        {/* Search */}

        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#64513B]/40"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events, clubs, stories..."
            className="w-full rounded-full bg-[#F8F4E8] border border-[#64513B]/10 pl-12 pr-5 py-3 outline-none"
          />
        </div>

        {/* Tabs */}

        <div className="flex gap-3 overflow-x-auto pb-5 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition font-semibold whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#3B727C] text-white"
                  : "bg-[#F8F4E8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-8">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >

                {activeTab === "Feed" && (
                  <div className="space-y-6">
                    {filteredStories.map((story) => (
                      <FeedCard
                        key={story.id}
                        post={story}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "Events" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "Hidden Gems" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredGems.map((gem) => (
                      <GemCard
                        key={gem.id}
                        gem={gem}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "Senior Advice" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredAdvice.map((item) => (
                      <AdviceCard
                        key={item.id}
                        advice={item}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "Clubs" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredClubs.map((club) => (
                      <ClubCard
                        key={club.id}
                        club={club}
                      />
                    ))}
                  </div>
                )}

              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT SIDEBAR */}

          <div className="lg:col-span-4 space-y-6">

            <QuestAI />

            <CommunityStats />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;