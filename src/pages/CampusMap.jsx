import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, ZoomIn, ZoomOut, RefreshCw, BookOpen, FlaskConical, Coffee, MapPin } from 'lucide-react';

const CampusMap = () => {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isNavigating, setIsNavigating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Starting coordinates based on your "YOU" marker (50%, 82%)
    const startPoint = "M500 820 "; 
    
    // Vector 1: You to Science Lab path data
    const vector1 = "L494 0 C542 26 560 42 563 47 L441 205 L520 291 L549 376 L465 404 L47 390 L0 420";
    
    // Vector 2: Science Lab to Cafeteria path data
    const vector2 = " L272 432 L300 394 L285 300 L198 235 L325 73 L243 18 L258 0";

    setBuildings([
      { 
        id: 1, 
        name: "Library (JS Block)", 
        icon: BookOpen, 
        top: "62%", left: "48%", 
        path: "M500 820 L480 720" 
      },
      { 
        id: 2, 
        name: "Science Lab (RV Block)", 
        icon: FlaskConical, 
        top: "25%", left: "67%", 
        path: startPoint + vector1 
      },
      { 
        id: 3, 
        name: "Main Cafeteria", 
        icon: Coffee, 
        top: "78%", left: "33%", 
        path: startPoint + vector1 + vector2 
      },
    ]);
  }, []);

  useEffect(() => {
    if (!searchQuery) return;
    const match = buildings.find(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (match) {
      setSelectedBuilding(match);
      setZoom(1.2);
    }
  }, [searchQuery, buildings]);

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#F8F4E8] rounded-3xl p-5 shadow-lg border border-[#64513B]/10">
            <h2 className="text-lg font-bold text-[#64513B]">{selectedBuilding.name}</h2>
            <p className="text-sm text-[#64513B]/70 mt-2">2 min walk • 140 m</p>
            <button onClick={() => setIsNavigating(true)} className="w-full mt-4 bg-[#3B727C] text-white rounded-xl py-3 font-semibold">
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
            {isNavigating && selectedBuilding && <RouteWithDot path={selectedBuilding.path} />}
            {buildings.filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase())).map(b => (
              <BuildingMarker key={b.id} {...b} onClick={() => { setSelectedBuilding(b); setIsNavigating(false); }} />
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

const RouteWithDot = ({ path }) => (
  <svg className="absolute inset-0 w-full h-full z-20 overflow-visible" viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <motion.path 
      d={path} 
      fill="transparent" 
      stroke="#C9A86A" 
      strokeWidth="15" 
      initial={{ pathLength: 0 }} 
      animate={{ pathLength: 1 }} 
      transition={{ duration: 4, ease: "linear" }} 
    />
    <motion.circle 
      r="12" 
      fill="#3B727C" 
      initial={{ offsetDistance: "0%" }} 
      animate={{ offsetDistance: "100%" }} 
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
      style={{ offsetPath: `path("${path}")` }} 
    />
  </svg>
);

const YouAreHereMarker = ({ top, left }) => (
  <div className="absolute z-40" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
    <motion.div animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-8 h-8 bg-blue-500 rounded-full -left-2 -top-2" />
    <div className="w-5 h-5 bg-blue-600 border-[3px] border-white rounded-full shadow-lg" />
    <span className="absolute mt-2 -left-3 text-[9px] font-bold text-blue-600 bg-white px-1 rounded">📍 YOU</span>
  </div>
);

const BuildingMarker = ({ name, top, left, icon: Icon, onClick }) => (
  <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} onClick={(e) => { e.stopPropagation(); onClick(); }} className="absolute z-30 pointer-events-auto group" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
    <div className="p-3 bg-[#64513B] text-white rounded-full shadow-lg border-2 border-white"><Icon size={20} /></div>
    <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md">{name}</span>
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