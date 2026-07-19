import React, { useState } from "react";
import { MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    const confirmRegister = window.confirm(
      `Register for "${event.title}"?`
    );

    if (confirmRegister) {
      setRegistered(true);
    }
  };

  return (
    <div className="bg-[#F8F4E8]/90 backdrop-blur-md p-6 rounded-3xl border border-[#64513B]/10 shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-bold">
        {event.title}
      </h3>

      <p className="text-sm text-[#64513B]/70 mt-2">
        {event.time} • {event.loc}
      </p>

      <div className="flex justify-between items-center mt-5">
        <span className="text-[#3B727C] font-semibold">
          Prize: {event.prize}
        </span>

        <span className="text-sm opacity-70">
          {event.going} Going
        </span>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleRegister}
          disabled={registered}
          className={`flex-1 py-2 rounded-full font-semibold transition ${
            registered
              ? "bg-green-600 text-white cursor-default"
              : "bg-[#3B727C] hover:bg-[#2d5a62] text-white"
          }`}
        >
          {registered ? "✅ Registered" : "Register"}
        </button>

        <button className="px-4 rounded-full bg-[#E0D3AF] hover:bg-[#d7c79e] transition">
          <MapPin size={20} />
        </button>
      </div>
    </div>
  );
};

export default EventCard;