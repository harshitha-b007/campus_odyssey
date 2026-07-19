import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  FileText,
  Sparkles,
  Trophy,
  MapPin,
  Brain,
  BookOpen,
  Clock,
  CloudSun,
} from "lucide-react";

const SEMESTERS = [
  {
    id: "Orientation",
    color: "emerald",
    bg: "bg-gradient-to-br from-emerald-50 to-green-100",
    icon: Leaf,
    weather: "☀ Pleasant Weather",
    progress: 20,
    stats: "6 / 18 Buildings",
    achievement: "Explorer",
    widgets: [
      "Registration",
      "ID Card",
      "Meet Mentor",
      "Freshers Meetup",
    ],
    map: ["Admin Block", "Library", "Registration Desk"],
    ai:
      "👋 Welcome! Visit the library today and unlock 50 XP. Your mentor is waiting near the Admin Block.",
  },
  {
    id: "Mid Semester",
    color: "amber",
    bg: "bg-gradient-to-br from-amber-50 to-orange-100",
    icon: FileText,
    weather: "🌤 Warm Afternoon",
    progress: 60,
    stats: "5 Assignments",
    achievement: "Scholar",
    widgets: [
      "Today's Classes",
      "Assignments",
      "Attendance",
      "Study Rooms",
    ],
    map: ["Labs", "Classrooms", "Study Room"],
    ai:
      "📚 You have a 90-minute gap after DBMS. Room RV-204 is free for studying.",
  },
  {
    id: "Exam Week",
    color: "indigo",
    bg: "bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white",
    icon: Sparkles,
    weather: "🌧 Rain Expected",
    progress: 95,
    stats: "18 Study Hours",
    achievement: "Survivor",
    widgets: [
      "Exam Countdown",
      "Revision Planner",
      "Library Seats",
      "Exam Hall",
    ],
    map: ["Library", "Quiet Zone", "Exam Hall"],
    ai:
      "🧠 Library occupancy is only 22%. This is the perfect time to revise Operating Systems.",
  },
];

export default function TimeMachine() {
  const [index, setIndex] = useState(0);

  const current = SEMESTERS[index];
  const Icon = current.icon;

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${current.bg} px-8 py-10`}
    >
      {/* Header */}

      <motion.div
        layout
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold">⏳ Campus Time Machine</h1>

        <p className="opacity-70 mt-2">
          Watch your campus evolve throughout the semester
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="max-w-3xl mx-auto mb-14 relative">

        <div className="absolute left-0 right-0 top-5 h-1 bg-gray-300 rounded-full"/>

        <motion.div
          className="absolute top-5 h-1 bg-emerald-500 rounded-full"
          animate={{
            width: `${index * 50}%`,
          }}
        />

        <div className="flex justify-between relative">

          {SEMESTERS.map((s, i) => {

            const StageIcon = s.icon;

            return (

              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className="flex flex-col items-center"
              >

                <motion.div
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: index === i ? 1.2 : 1,
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    index === i
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  <StageIcon size={22} />
                </motion.div>

                <span className="mt-3 text-xs font-bold">
                  {s.id}
                </span>

              </button>
            );
          })}
        </div>
      </div>

      {/* Dashboard */}

      <div className="grid lg:grid-cols-3 gap-7">

        {/* LEFT */}

        <AnimatePresence mode="wait">

          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="lg:col-span-2"
          >

            <div className="grid md:grid-cols-2 gap-5">

              {current.widgets.map((widget) => (

                <motion.div
                  key={widget}
                  whileHover={{ y: -5 }}
                  className={`rounded-3xl p-6 shadow-lg ${
                    index === 2
                      ? "bg-slate-800"
                      : "bg-white"
                  }`}
                >

                  <Icon className="mb-4"/>

                  <h3 className="font-bold text-lg">
                    {widget}
                  </h3>

                  <p className="opacity-60 mt-2 text-sm">
                    Dynamic content based on semester stage.
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </AnimatePresence>

        {/* RIGHT */}

        <div className="space-y-5">

          {/* AI */}

          <motion.div
            layout
            className={`rounded-3xl p-6 shadow-lg ${
              index === 2
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >

            <div className="flex items-center gap-2 mb-3">

              <Brain />

              <h2 className="font-bold">
                Senior AI
              </h2>

            </div>

            <p className="opacity-80 text-sm">
              {current.ai}
            </p>

            <button className="mt-5 w-full rounded-xl bg-indigo-600 text-white py-2">
              Navigate
            </button>

          </motion.div>

          {/* Mini Map */}

          <div
            className={`rounded-3xl p-6 shadow-lg ${
              index === 2
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >

            <h2 className="font-bold mb-4 flex items-center gap-2">
              <MapPin size={18} />
              Campus Highlights
            </h2>

            {current.map.map((place) => (
              <p
                key={place}
                className="flex gap-2 mb-2 opacity-80"
              >
                📍 {place}
              </p>
            ))}

          </div>

          {/* Progress */}

          <div
            className={`rounded-3xl p-6 shadow-lg ${
              index === 2
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >

            <h2 className="font-bold mb-4">
              Semester Progress
            </h2>

            <div className="w-full bg-gray-200 rounded-full h-4">

              <motion.div
                animate={{
                  width: `${current.progress}%`,
                }}
                className="bg-indigo-500 h-4 rounded-full"
              />

            </div>

            <p className="mt-3 text-sm">
              {current.progress}% Complete
            </p>

          </div>

          {/* Weather */}

          <div
            className={`rounded-3xl p-6 shadow-lg ${
              index === 2
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >

            <div className="flex items-center gap-2">

              <CloudSun />

              <span>{current.weather}</span>

            </div>

          </div>

          {/* Achievement */}

          <div
            className={`rounded-3xl p-6 shadow-lg flex justify-between items-center ${
              index === 2
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >

            <div>

              <p className="text-sm opacity-60">
                Achievement
              </p>

              <h3 className="font-bold">
                🏆 {current.achievement}
              </h3>

            </div>

            <Trophy className="text-yellow-500"/>

          </div>

        </div>

      </div>
    </div>
  );
}