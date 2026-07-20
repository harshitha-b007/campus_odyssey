import React, { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Trophy,
  Clock,
} from "lucide-react";

const EventCard = ({ event }) => {
  const storageKey = `event-${event.id}`;

  const [registered, setRegistered] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "true") {
      setRegistered(true);
    }

    const timer = setInterval(() => {
      if (!event.date) return;

      const difference =
        new Date(event.date).getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft("Event Started");
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegister = () => {
    if (registered) return;

    const ok = window.confirm(
      `Register for ${event.title}?`
    );

    if (ok) {
      setRegistered(true);
      localStorage.setItem(storageKey, "true");
    }
  };

  return (
    <div className="bg-[#F8F4E8] rounded-3xl shadow-md border border-[#64513B]/10 p-6">

      <h2 className="text-2xl font-bold">
        {event.title}
      </h2>

      <div className="space-y-3 mt-5">

        <div className="flex items-center gap-2 text-sm">
          <Calendar size={18} />
          {event.time}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin size={18} />
          {event.loc}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Trophy size={18} />
          Prize: {event.prize}
        </div>

        <div className="flex items-center gap-2 text-sm">
          👥 {event.going} Going
        </div>

        <div className="flex items-center gap-2 text-sm">
          💺 {event.seats} Seats Left
        </div>

        <div className="flex items-center gap-2 text-sm text-[#3B727C]">
          <Clock size={18} />
          {timeLeft}
        </div>

      </div>

      <button
        onClick={handleRegister}
        disabled={registered}
        className={`w-full mt-6 py-3 rounded-full font-bold transition ${
          registered
            ? "bg-green-600 text-white cursor-default"
            : "bg-[#3B727C] hover:bg-[#2c5b63] text-white"
        }`}
      >
        {registered
          ? "✅ Registered"
          : "Register"}
      </button>

    </div>
  );
};

export default EventCard;