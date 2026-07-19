import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Sparkles,
  Send,
  MapPin,
  Calendar,
  Users,
  Coffee,
  BookOpen,
  Compass,
} from "lucide-react";

const QUICK_PROMPTS = [
  {
    icon: <Users size={16} />,
    text: "Recommend Clubs",
  },
  {
    icon: <Calendar size={16} />,
    text: "Events Today",
  },
  {
    icon: <BookOpen size={16} />,
    text: "Senior Advice",
  },
  {
    icon: <MapPin size={16} />,
    text: "Hidden Gems",
  },
  {
    icon: <Coffee size={16} />,
    text: "Best Cafeteria",
  },
  {
    icon: <Compass size={16} />,
    text: "Study Partners",
  },
];

const MOCK_RESPONSES = {
  "Recommend Clubs":
    "Based on your recent visits to the Innovation Hub and your coding interests, I recommend joining the Robotics Club and Google Developer Groups.",

  "Events Today":
    "Today's top events include the AI Workshop at 4 PM and the Campus Networking Mixer at 6 PM.",

  "Senior Advice":
    "A senior suggests focusing on DBMS normalization and transactions before your viva. It only takes 5 minutes to read.",

  "Hidden Gems":
    "The Secret Garden has a quiet level of 96% and is only a 2-minute walk away. Great for studying.",

  "Best Cafeteria":
    "Central Food Court currently has the shortest waiting time (5 minutes) and today's special is Paneer Wrap Combo.",

  "Study Partners":
    "I found 4 students currently studying DBMS nearby. Akash is in the Library and Meera is in Innovation Hub.",
};

const QuestAI = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "👋 Hi Aryan! I'm Quest AI.\n\nI can help you discover clubs, events, study partners, hidden gems, and personalized recommendations around campus.",
    },
  ]);

  const handlePrompt = (prompt) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: prompt,
      },
      {
        role: "assistant",
        text:
          MOCK_RESPONSES[prompt] ||
          "This feature will be powered by Gemini soon.",
      },
    ]);
  };

  return (
    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#3B727C] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3"
      >
        <Bot size={22} />
        <span className="font-semibold">Quest AI</span>
      </motion.button>

      {/* Drawer */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full sm:w-[420px] bg-[#F8F4E8] shadow-2xl z-[100] flex flex-col"
          >
            {/* Header */}

            <div className="bg-[#3B727C] text-white px-6 py-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Sparkles />
                <div>
                  <h2 className="font-bold text-lg">Quest AI</h2>
                  <p className="text-xs opacity-80">
                    Your Campus Companion
                  </p>
                </div>
              </div>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* Messages */}

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-4 text-sm whitespace-pre-line max-w-[90%] ${
                    msg.role === "assistant"
                      ? "bg-white border border-[#64513B]/10"
                      : "bg-[#3B727C] text-white ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Quick Prompts */}

            <div className="px-5 pb-4">
              <h3 className="font-semibold mb-3">
                Quick Actions
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {QUICK_PROMPTS.map((item) => (
                  <button
                    key={item.text}
                    onClick={() => handlePrompt(item.text)}
                    className="bg-white border border-[#64513B]/10 rounded-xl p-3 text-sm hover:bg-[#EDE6D5] transition flex items-center gap-2"
                  >
                    {item.icon}
                    {item.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}

            <div className="border-t border-[#64513B]/10 p-4">
              <div className="flex gap-2">
                <input
                  placeholder="Ask Quest AI anything..."
                  className="flex-1 rounded-full border border-[#64513B]/10 px-4 py-3 bg-white outline-none"
                />

                <button className="bg-[#3B727C] text-white p-3 rounded-full">
                  <Send size={18} />
                </button>
              </div>

              <p className="text-[11px] text-center mt-3 opacity-60">
                Gemini integration ready • Replace mock responses with API calls
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuestAI;