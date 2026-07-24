import { useNavigate } from "react-router-dom";

import React from "react";
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  MapPin,
  BookOpen,
  Coffee,
  Trophy,
  Compass,
  School,
  Footprints,
  Brain,
  Star,
  ChevronRight,
  Target,
  Smile,
  Route,
  Clock,
  Flame
} from "lucide-react";

import { motion } from "framer-motion";

<div
  className="min-h-screen bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: "url('/profile-bg.png')",
  }}
></div>
const timeline = [
  {
    time: "8:45 AM",
    icon: MapPin,
    color: "text-emerald-400",
    title: "Entered Campus",
    description:
      "Started today's Campus Odyssey from the Main Gate."
  },
  {
    time: "9:00 AM",
    icon: School,
    color: "text-blue-400",
    title: "Reached RV Block",
    description:
      "Successfully navigated to your classroom."
  },
  {
    time: "9:15 AM",
    icon: BookOpen,
    color: "text-yellow-400",
    title: "Attended Data Structures",
    description:
      "Completed today's lecture successfully."
  },
  {
    time: "11:00 AM",
    icon: Coffee,
    color: "text-orange-400",
    title: "Visited Canteen",
    description:
      "Discovered the Main Canteen and took a short break."
  },
  {
    time: "1:00 PM",
    icon: BookOpen,
    color: "text-indigo-400",
    title: "Explored Library",
    description:
      "Unlocked Library location and earned XP."
  },
  {
    time: "4:30 PM",
    icon: Trophy,
    color: "text-yellow-500",
    title: "Orientation Quest Complete",
    description:
      "Finished your first exploration quest."
  }
];

const CampusEcho = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: "none"
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-emerald-950/80 backdrop-blur-sm" />

      {/* Floating Glow */}

      <motion.div
        animate={{
          y: [-10, 10, -10]
        }}
        transition={{
          repeat: Infinity,
          duration: 6
        }}
        className="absolute top-20 left-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [10, -10, 10]
        }}
        transition={{
          repeat: Infinity,
          duration: 7
        }}
        className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
      />

      {/* CONTENT */}

      <div className="relative z-10 px-8 py-10 max-w-7xl mx-auto">
        {/* ==========================================================
                    CAMPUS STATS
========================================================== */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-20"
>
  <h2 className="text-3xl font-bold text-white mb-8">
    Today's Campus Statistics
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {[
      {
        icon: Footprints,
        title: "Today's Steps",
        value: "6,542",
        color: "from-emerald-500 to-green-400"
      },
      {
        icon: School,
        title: "Buildings Explored",
        value: "6",
        color: "from-cyan-500 to-blue-500"
      },
      {
        icon: Target,
        title: "Quests Completed",
        value: "4",
        color: "from-yellow-500 to-orange-400"
      },
      {
        icon: BookOpen,
        title: "Classes Attended",
        value: "3",
        color: "from-purple-500 to-indigo-500"
      },
      {
        icon: Brain,
        title: "AI Questions Asked",
        value: "18",
        color: "from-pink-500 to-rose-400"
      },
      {
        icon: Route,
        title: "Navigation Accuracy",
        value: "96%",
        color: "from-teal-500 to-cyan-400"
      }
    ].map((card, index) => {

      const Icon = card.icon;

      return (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03
          }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-xl"
        >

          <div
            className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${card.color}
            flex items-center justify-center`}
          >
            <Icon className="text-white" />
          </div>

          <h3 className="text-slate-300 mt-5">
            {card.title}
          </h3>

          <h1 className="text-4xl text-white font-bold mt-2">
            {card.value}
          </h1>

        </motion.div>

      );

    })}

  </div>

</motion.section>


{/* ==========================================================
                    ACHIEVEMENTS
========================================================== */}

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-20"
>

  <h2 className="text-3xl font-bold text-white mb-8">
    Today's Achievements
  </h2>

  <div className="flex gap-6 overflow-x-auto pb-4">

    {[
      {
        icon: Compass,
        title: "Explorer",
        color: "bg-emerald-500"
      },
      {
        icon: BookOpen,
        title: "Library Visitor",
        color: "bg-indigo-500"
      },
      {
        icon: Target,
        title: "Quest Finisher",
        color: "bg-yellow-500"
      },
      {
        icon: Smile,
        title: "Friendly Fresher",
        color: "bg-pink-500"
      },
      {
        icon: Route,
        title: "Navigator",
        color: "bg-cyan-500"
      },
      {
        icon: Trophy,
        title: "Campus Champion",
        color: "bg-orange-500"
      }

    ].map((badge, index) => {

      const Icon = badge.icon;

      return (

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 2
          }}
          key={index}
          className="min-w-[210px] rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 text-center"
        >

          <div
            className={`${badge.color}
            h-20 w-20 rounded-full mx-auto flex items-center justify-center shadow-lg`}
          >

            <Icon className="text-white" size={34} />

          </div>

          <h3 className="text-white text-xl mt-5 font-semibold">
            {badge.title}
          </h3>

          <p className="text-slate-400 mt-2">
            Badge Unlocked
          </p>

        </motion.div>

      );

    })}

  </div>

</motion.section>


{/* ==========================================================
                    AI REFLECTION
========================================================== */}

<motion.section

  initial={{ opacity: 0, y: 40 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  className="mt-20"

>

  <div className="rounded-3xl bg-gradient-to-r from-emerald-600/20 to-cyan-500/20 border border-emerald-400/20 backdrop-blur-xl p-8">

    <div className="flex items-center gap-3">

      <Sparkles className="text-yellow-300" />

      <h2 className="text-3xl text-white font-bold">

        Today's Reflection

      </h2>

    </div>

    <p className="text-slate-300 leading-8 text-lg mt-8">

      Every destination you reached today was once unfamiliar.
      Each classroom discovered, every question asked,
      every path explored and every conversation started has made
      the campus feel a little more like home.

      <br /><br />

      Remember that confidence isn't built in a single day—
      it grows through every small adventure.

      Tomorrow holds new buildings,
      new people,
      new opportunities,
      and another exciting chapter of your Campus Odyssey.

    </p>

  </div>

</motion.section>


{/* ==========================================================
                TOMORROW'S ADVENTURE
========================================================== */}

<motion.section

  initial={{ opacity: 0 }}

  whileInView={{ opacity: 1 }}

  viewport={{ once: true }}

  className="mt-20"

>

<h2 className="text-3xl font-bold text-white mb-8">

Tomorrow's Adventure

</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
{
title:"Innovation Lab",
time:"8 mins",
difficulty:"Easy",
icon:Brain
},
{
title:"Coding Club",
time:"6 mins",
difficulty:"Medium",
icon:BookOpen
},
{
title:"Mechanical Workshop",
time:"12 mins",
difficulty:"Hard",
icon:Compass
}
].map((place,index)=>{

const Icon=place.icon;

return(

<motion.div

whileHover={{y:-8}}

key={index}

className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-7"

>

<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">

<Icon className="text-white"/>

</div>

<h3 className="text-2xl text-white font-semibold mt-6">

{place.title}

</h3>

<div className="mt-5 flex justify-between text-slate-300">

<span className="flex items-center gap-2">

<Clock size={18}/>

{place.time}

</span>

<span>

{place.difficulty}

</span>

</div>

<button
  onClick={() => navigate("/map")}
  className="mt-8 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-white font-semibold hover:shadow-xl transition"
>
  Start Adventure
</button>

</motion.div>

)

})}

</div>

</motion.section>
{/* ==========================================================
                    CAMPUS MOOD
========================================================== */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h2 className="text-3xl font-bold text-white mb-8">
    Campus Mood
  </h2>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Mood Card */}

    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8"
    >

      <div className="flex items-center gap-4">

        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">

          <Smile className="text-white" size={42} />

        </div>

        <div>

          <h3 className="text-3xl font-bold text-white">

            Curious 😊

          </h3>

          <p className="text-slate-300 mt-2">

            You're confidently exploring the campus.

          </p>

        </div>

      </div>

      <div className="mt-10 space-y-8">

        {/* Confidence */}

        <div>

          <div className="flex justify-between text-white mb-2">

            <span>Confidence</span>

            <span>82%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "82%" }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
            />

          </div>

        </div>

        {/* Familiarity */}

        <div>

          <div className="flex justify-between text-white mb-2">

            <span>Campus Familiarity</span>

            <span>67%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "67%" }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />

          </div>

        </div>

        {/* Quest Progress */}

        <div>

          <div className="flex justify-between text-white mb-2">

            <span>Quest Progress</span>

            <span>75%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1.4 }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
            />

          </div>

        </div>

      </div>

    </motion.div>



    {/* Daily Streak */}

    <motion.div
      whileHover={{
        scale: 1.02
      }}
      className="rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-300/20 backdrop-blur-xl p-8"
    >

      <div className="flex items-center gap-4">

        <div className="h-20 w-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">

          <Flame className="text-white" size={42} />

        </div>

        <div>

          <h3 className="text-4xl font-bold text-white">

            7 Day Streak

          </h3>

          <p className="text-slate-300 mt-2">

            You've explored Campus Odyssey every day!

          </p>

        </div>

      </div>

      <div className="grid grid-cols-7 gap-3 mt-10">

        {[
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S"
        ].map((day, index) => (

          <motion.div

            key={index}

            whileHover={{ scale: 1.15 }}

            className="aspect-square rounded-xl bg-orange-500 flex items-center justify-center font-bold text-white shadow-lg"

          >

            {day}

          </motion.div>

        ))}

      </div>

      <p className="mt-8 text-slate-300 leading-7">

        Continue exploring tomorrow to maintain your streak and unlock
        exclusive explorer rewards.

      </p>

    </motion.div>

  </div>

</motion.section>



{/* ==========================================================
                      FINAL CTA
========================================================== */}

<motion.section

  initial={{ opacity: 0, y: 40 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  className="mt-24 mb-16"

>

  <div className="rounded-[36px] overflow-hidden bg-gradient-to-r from-emerald-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 p-12 text-center">

    <motion.div

      animate={{
        y: [-5, 5, -5]
      }}

      transition={{
        repeat: Infinity,
        duration: 4
      }}

      className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-2xl"

    >

      <Compass className="text-white" size={46} />

    </motion.div>

    <h2 className="text-5xl font-bold text-white mt-8">

      Continue Your Journey

    </h2>

    <p className="text-slate-300 text-lg mt-5 max-w-3xl mx-auto leading-8">

      Every building explored, every quest completed and every friend you meet
      writes another chapter in your Campus Odyssey.

      Keep discovering.

      Keep learning.

      Keep growing.

    </p>

    <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/dashboard")}
  className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-10 py-5 text-lg font-bold text-white shadow-2xl"
>
  Continue Journey
  <ChevronRight />
</motion.button>

  </div>

</motion.section>
        {/* NAVBAR */}

        <div className="flex justify-between items-center">

          <button className="flex items-center gap-2 text-white hover:text-emerald-400 transition">
            <ArrowLeft size={20}/>
            Dashboard
          </button>

          <div className="flex items-center gap-3 text-slate-200">

            <Calendar size={18}/>

            <span>
              July 21, 2026
            </span>

          </div>

        </div>

        {/* HEADER */}

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          className="mt-12"
        >

          <h1 className="text-5xl font-bold text-white">

            Campus Echo

          </h1>

          <p className="text-slate-300 mt-4 text-lg">

            Your AI-generated journey through campus.

          </p>

        </motion.div>

        {/* HERO */}

        <motion.div

          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}

          transition={{delay:.2}}

          className="mt-10 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8"

        >

          <div className="grid lg:grid-cols-4 gap-8 items-center">

            {/* ICON */}

            <div className="flex justify-center">

              <motion.div

                animate={{
                  rotate:[0,8,-8,0]
                }}

                transition={{
                  repeat:Infinity,
                  duration:5
                }}

                className="h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-2xl"

              >

                <Sparkles className="text-white" size={58}/>

              </motion.div>

            </div>

            {/* STORY */}

            <div className="lg:col-span-3">

              <h2 className="text-3xl font-bold text-white">

                Good Evening, Arun 👋

              </h2>

              <p className="text-emerald-300 mt-2">

                Today's Campus Story

              </p>

              <p className="mt-6 text-slate-200 leading-8">

                Today you successfully navigated from the Main Gate to the RV Block,
                attended your Data Structures class, explored the Central Library,
                discovered the Main Canteen, completed your Orientation Quest,
                and increased your campus confidence by
                <span className="text-emerald-400 font-bold"> 18%</span>.
                You also unlocked the
                <span className="text-yellow-300 font-semibold"> Explorer Badge</span>.

              </p>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/20 p-6">

                <div className="flex items-center gap-3">

                  <Brain className="text-emerald-400"/>

                  <h3 className="text-xl text-white font-semibold">

                    AI Generated Summary

                  </h3>

                </div>

                <p className="text-slate-300 mt-4 leading-7">

                  Every destination reached today transformed the campus into a
                  more familiar place. Your exploration patterns indicate growing
                  confidence and efficient navigation. Keep discovering new places
                  to unlock advanced quests and hidden campus achievements.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* TIMELINE */}

        <motion.div

          initial={{opacity:0}}
          whileInView={{opacity:1}}

          viewport={{once:true}}

          className="mt-16"

        >

          <h2 className="text-3xl text-white font-bold">

            Today's Journey

          </h2>

          <div className="mt-10 border-l border-white/20 ml-6">

            {timeline.map((item,index)=>{

              const Icon=item.icon;

              return(

                <motion.div

                  key={index}

                  initial={{opacity:0,x:-30}}

                  whileInView={{opacity:1,x:0}}

                  transition={{delay:index*.15}}

                  className="relative ml-8 mb-12"

                >

                  <div className="absolute -left-12 top-1 h-10 w-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">

                    <Icon className={item.color} size={20}/>

                  </div>

                  <p className="text-emerald-400 text-sm">

                    {item.time}

                  </p>

                  <h3 className="text-white text-xl font-semibold mt-1">

                    {item.title}

                  </h3>

                  <p className="text-slate-400 mt-2 leading-7">

                    {item.description}

                  </p>

                </motion.div>

              )

            })}

          </div>

        </motion.div>

      </div>

    </div>
  );

};

export default CampusEcho;