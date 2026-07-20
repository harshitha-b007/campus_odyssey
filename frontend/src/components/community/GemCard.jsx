import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Navigation } from "lucide-react";
const GemCard = ({ gem }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
     navigate("/map");
  };

  return (
    <div className="bg-[#F8F4E8]/90 backdrop-blur-md p-6 rounded-3xl border border-[#64513B]/10 shadow-sm hover:shadow-lg transition">

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{gem.name}</h3>
          <p className="text-sm text-[#64513B]/70 mt-2">
            {gem.description}
          </p>
        </div>

        <MapPin className="text-[#3B727C]" />
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
          <span>Quiet Level</span>
          <span>{gem.quiet}%</span>
        </div>

        <div className="w-full h-2 rounded-full bg-[#E0D3AF] overflow-hidden">
          <div
            className="h-full bg-[#3B727C]"
            style={{ width: `${gem.quiet}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-sm">
          🚶 {gem.dist}
        </span>

        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 bg-[#3B727C] hover:bg-[#2d5a62] text-white px-5 py-2 rounded-full transition"
        >
          <Navigation size={18} />
          Navigate
        </button>
      </div>
    </div>
  );
};

export default GemCard;