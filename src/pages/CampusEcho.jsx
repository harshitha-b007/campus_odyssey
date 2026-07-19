import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  MapPin,
  Users,
  BookOpen,
  Brain,
  Sparkles,
  Moon,
  ChevronRight,
} from "lucide-react";

const xp = {
  navigation: 82,
  academic: 68,
  social: 55,
};

const todayAchievements = [
  "Visited the Central Library",
  "Completed DBMS Lab",
  "Attended Freshers Meetup",
  "Unlocked RV Block",
];

const aiNarrative = `
Today was a productive day!

You successfully explored a new academic building, completed your DBMS lab,
and even attended the Freshers Meetup. That's a huge step in building both
your academic confidence and your campus network.

You walked nearly 2.4 km around campus without getting lost, earned
Navigation XP, and maintained consistent academic progress.

Tomorrow you have a lighter schedule. It might be the perfect opportunity
to explore the Innovation Hub or spend some quiet time in the Library.

Don't forget to rest tonight.
You're doing better than you think.
`;

const ProgressBar = ({ label, value, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="font-semibold text-slate-700">{label}</span>
      <span className="font-bold">{value}%</span>
    </div>

    <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);

const CampusEcho = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-8 py-10">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-2">
          <Moon className="text-indigo-300" size={34} />
          <h1 className="text-5xl font-bold">
            Campus Echo
          </h1>
        </div>

        <p className="text-slate-400 text-lg">
          Your personalized end-of-day reflection
        </p>
      </motion.div>

      {/* Main Grid */}

      <div className="max-w-6xl mx-auto mt-10 grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="lg:col-span-2 space-y-6">

          {/* Gemini Reflection */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl bg-slate-800 p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <Brain className="text-indigo-300" />
              <h2 className="text-2xl font-bold">
                Gemini Reflection
              </h2>
            </div>

            <p className="leading-8 text-slate-300 whitespace-pre-line">
              {aiNarrative}
            </p>
          </motion.div>

          {/* XP */}

          <div className="rounded-3xl bg-slate-800 p-8">

            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-yellow-300" />
              <h2 className="text-2xl font-bold">
                Today's Progress
              </h2>
            </div>

            <div className="space-y-8">

              <ProgressBar
                label="Navigation XP"
                value={xp.navigation}
                color="bg-emerald-500"
              />

              <ProgressBar
                label="Academic XP"
                value={xp.academic}
                color="bg-blue-500"
              />

              <ProgressBar
                label="Social XP"
                value={xp.social}
                color="bg-pink-500"
              />

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-6">

          {/* Today's Journey */}

          <div className="bg-slate-800 rounded-3xl p-6">

            <div className="flex items-center gap-2 mb-5">
              <Trophy className="text-yellow-300" />
              <h3 className="font-bold text-xl">
                Today's Journey
              </h3>
            </div>

            <div className="space-y-4">

              {todayAchievements.map((item) => (

                <motion.div
                  whileHover={{ x: 6 }}
                  key={item}
                  className="flex items-center gap-3"
                >
                  <ChevronRight
                    className="text-indigo-300"
                    size={18}
                  />

                  <p>{item}</p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Stats */}

          <div className="bg-slate-800 rounded-3xl p-6">

            <h3 className="font-bold text-xl mb-5">
              Daily Stats
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  Distance Walked
                </div>

                <b>2.4 km</b>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  Classes Attended
                </div>

                <b>4</b>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  Social Activities
                </div>

                <b>2</b>
              </div>

            </div>

          </div>

          {/* Tomorrow */}

          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 p-6">

            <h3 className="text-xl font-bold mb-3">
              Tomorrow's Suggestion
            </h3>

            <p className="text-sm opacity-95 leading-7">
              You have a free 2-hour slot after DBMS.
              Gemini recommends exploring the Innovation Hub,
              completing the Robotics Club quest,
              and earning another 120 Navigation XP.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CampusEcho;