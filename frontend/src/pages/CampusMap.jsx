import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, ZoomIn, ZoomOut, RefreshCw, BookOpen, FlaskConical, Coffee, MapPin } from 'lucide-react';
import { BUILDINGS } from "../data/buildings";

const CampusMap = () => {
  console.log("***** NEW CAMPUS MAP *****");
  const buildings = BUILDINGS;
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isNavigating, setIsNavigating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    if (!searchQuery) return;
    const match = buildings.find(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (match) {
      setSelectedBuilding(match);
      setZoom(1.2);
    }
  }, [searchQuery, buildings]);
console.log("isNavigating:", isNavigating);
console.log("selectedBuilding:", selectedBuilding);
  return (
    <div className="flex h-screen w-full bg-[#E0D3AF] p-4 gap-4 overflow-hidden font-sans">
      <aside className="w-80 flex flex-col gap-4 z-20">
        <h1 className="text-2xl font-serif text-[#64513B] font-bold">Campus Quest</h1>
        <div className="relative">
          <input className="w-full bg-[#F8F4E8] p-4 pl-12 rounded-2xl border border-[#64513B]/10" placeholder="Search JS, RV, Cafeteria..." onChange={(e) => setSearchQuery(e.target.value)} />
          <Search className="absolute left-4 top-4 text-[#6D5B47]" size={20} />
        </div>
        <button className="bg-[#64513B] p-4 rounded-2xl flex items-center justify-center gap-3 text-white font-bold hover:bg-[#4a3b2b] transition">
          <Zap size={20} className="text-[#C9A86A]" /> Ask Quest AI
        </button>
{selectedBuilding && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-[#F8F4E8] rounded-3xl p-5 shadow-lg border border-[#64513B]/10"
  >
    <h2 className="text-xl font-bold text-[#64513B]">
      {selectedBuilding.name}
    </h2>

    <p className="text-[#64513B]/70 mt-2">
      {selectedBuilding.description}
    </p>

    <div className="mt-5 space-y-2 text-sm">
      <div className="flex justify-between">
        <span>📂 Category</span>
        <span>{selectedBuilding.category}</span>
      </div>

      <div className="flex justify-between">
        <span>🚶 Walk Time</span>
        <span>{selectedBuilding.estimatedTime}</span>
      </div>

      <div className="flex justify-between">
        <span>👥 Occupancy</span>
        <span>{selectedBuilding.occupancy}</span>
      </div>

      <div className="flex justify-between">
        <span>🚪 Status</span>
        <span>{selectedBuilding.status}</span>
      </div>

      <div className="flex justify-between">
        <span>⭐ XP Reward</span>
        <span>{selectedBuilding.xp}</span>
      </div>

      <div className="flex justify-between">
        <span>🎯 Quest</span>
        <span>
          {selectedBuilding.quest ? "Available" : "None"}
        </span>
      </div>
    </div>

    <button
      onClick={() => setIsNavigating(true)}
      className="w-full mt-6 bg-[#3B727C] hover:bg-[#2e5b63] text-white rounded-xl py-3 font-semibold transition"
    >
      {isNavigating ? "🧭 Navigating..." : "Start Navigation"}
    </button>
  </motion.div>
)}
      </aside>

      <main className="flex-1 relative rounded-[40px] overflow-hidden bg-white shadow-2xl border-[8px] border-[#F8F4E8]">
        <MapControls zoom={zoom} setZoom={setZoom} />
        <motion.div drag dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }} animate={{ scale: zoom }} className="relative w-full h-full cursor-grab">
          <img src="/campus-map.webp" className="h-full w-full object-contain" alt="Map" />
          <div className="absolute inset-0 pointer-events-none">
            <YouAreHereMarker top="82%" left="50%" />

{isNavigating && selectedBuilding && (
  <RouteWithDot
    route={`/routes/${selectedBuilding.route}`}
  />
)}
            {buildings
  .filter(
    (b) =>
      searchQuery === "" ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((b) => (
 <BuildingMarker
  key={b.id}
  {...b}
  onClick={() => {
    setSelectedBuilding(b);
    setIsNavigating(false);
  }}
/>
))}
          </div>
        </motion.div>

        <div className="absolute bottom-6 right-6 bg-white/90 p-4 rounded-2xl shadow-lg text-[10px] font-bold text-[#64513B] space-y-1">
          <p className="flex items-center gap-2"><MapPin size={12}/> YOU</p>
          <p className="flex items-center gap-2"><BookOpen size={12}/> Library</p>
          <p className="flex items-center gap-2"><FlaskConical size={12}/> Labs</p>
          <p className="flex items-center gap-2"><Coffee size={12}/> Cafeteria</p>
        </div>
      </main>
    </div>
  );
};


const RouteWithDot = ({ route }) => {
  console.log("Route image:", route);

  return (
    <img
      src={route}
      alt="Route"
      className="absolute inset-0 w-full h-full object-contain z-[999]"
      onLoad={() => console.log("Loaded")}
      onError={() => console.log("Not found")}
    />
  );
};
const YouAreHereMarker = ({ top, left }) => (
  <div className="absolute z-40" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
    <motion.div animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-8 h-8 bg-blue-500 rounded-full -left-2 -top-2" />
    <div className="w-5 h-5 bg-blue-600 border-[3px] border-white rounded-full shadow-lg" />
    <span className="absolute mt-2 -left-3 text-[9px] font-bold text-blue-600 bg-white px-1 rounded">📍 YOU</span>
  </div>
);

const BuildingMarker = ({
  name,
  top,
  left,
  occupancy,
  quest,
  icon: Icon,
  onClick,
}) => (
  <motion.button
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    className="absolute z-30 pointer-events-auto group"
    style={{
      top,
      left,
      transform: "translate(-50%, -50%)",
    }}
  >
    <div className="relative">
      <div className="p-3 bg-[#64513B] text-white rounded-full shadow-lg border-2 border-white">
        <Icon size={20} />
      </div>

      <div
        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border border-white ${
          occupancy === "High"
            ? "bg-red-500"
            : occupancy === "Medium"
            ? "bg-yellow-400"
            : "bg-green-500"
        }`}
      />

      {quest && (
        <span className="absolute -bottom-2 -right-2 text-yellow-400">
          ⭐
        </span>
      )}
    </div>

    <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md">
      {name}
    </span>
  </motion.button>
);

const MapControls = ({ zoom, setZoom }) => (
  <div className="absolute top-6 right-6 z-50 flex flex-col gap-2">
    <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))} className="p-3 bg-white rounded-2xl shadow-lg"><ZoomIn size={20}/></button>
    <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.6))} className="p-3 bg-white rounded-2xl shadow-lg"><ZoomOut size={20}/></button>
    <button onClick={() => setZoom(1)} className="p-3 bg-white rounded-2xl shadow-lg"><RefreshCw size={20}/></button>
  </div>
);

export default CampusMap;