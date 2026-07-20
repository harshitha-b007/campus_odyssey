import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Bell, Calendar, Megaphone, Star, Trophy, Map, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useChat } from '../context/ChatContext';
import { Sparkles } from 'lucide-react';
import { NotificationPanel } from '../components/NotificationPanel';

const TopNav = ({ onNotifClick }) => {
  const { openChat } = useChat();
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#E0D3AF]/80 backdrop-blur-md border-b border-[#64513B]/10 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-[#64513B] font-bold text-lg italic">Quest.</div>
        <div className="flex gap-6">
          {[{name: 'Home', path: '/'}, {name: 'Map', path: '/map'}, {name: 'Timetable', path: '/timetable'}, {name: 'Profile', path: '/profile'}].map((item) => (
            <Link key={item.name} to={item.path} className="text-[#64513B]/70 hover:text-[#64513B] font-semibold text-xs uppercase tracking-widest transition-colors">
              {item.name}
            </Link>
          ))}
          <button 
            onClick={openChat}
            className="text-[#64513B]/70 hover:text-[#64513B] font-semibold text-xs uppercase tracking-widest transition-colors"
          >
            AI
          </button>
        </div>
      </div>
    </nav>
  );
};

const Dashboard = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
  name: "",
  loc: ""
});

useEffect(() => {
  const student = JSON.parse(localStorage.getItem("student"));

  if (student) {
    setStudentData(student);
  } else {
    navigate("/");
  }
}, [navigate]);
  const [todaySchedule] = useState([{ sub: "DBMS", fac: "Dr. Smith", time: "09:50 AM", room: "302", bldg: "CSE Block", walk: "5m" }]);
  const [aiInput, setAiInput] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
const { openChat } = useChat();

// 1. Add this state to handle the AI response
const [aiResponse, setAiResponse] = useState("How can I assist your engineering journey today?");

// 2. Add this helper function to handle the hardcoded logic
const handleAiSubmit = () => {
  const input = aiInput.toLowerCase();
  if (input.includes("library")) {
    setAiResponse("The Library is 145 meters away. Estimated time: 2 minutes. Would you like navigation?");
  } else if (input.includes("canteen") || input.includes("cafeteria")) {
    setAiResponse("Main Cafeteria: Open until 8 PM. Current crowd: High.");
  } else if (input.includes("washroom") || input.includes("restroom")) {
    setAiResponse("Nearest washroom: Ground Floor, JS Block, 120 meters away.");
  } else {
    setAiResponse("I'm sorry, I can only help with Library, Canteen, or Washroom locations for this demo.");
  }
};

// 3. Update the Quest AI section in your JSX
<section className="col-span-12 md:col-span-5">
  <ParchmentCard title="Quest AI">
    {/* This shows the AI's response */}
    <div className="text-sm text-[#6D5B47] mb-6 min-h-[60px] italic">
      {aiResponse}
    </div>
    <div className="flex gap-3">
      <input 
        className="flex-1 bg-[#E0D3AF]/40 p-3 rounded-2xl text-sm border border-[#64513B]/20 focus:outline-none focus:ring-2 focus:ring-[#3B727C]/30" 
        placeholder="Ask Quest AI..." 
        value={aiInput} 
        onChange={(e) => setAiInput(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && handleAiSubmit()}
      />
      <button 
        onClick={handleAiSubmit}
        className="bg-[#3B727C] text-white px-6 rounded-2xl text-sm font-semibold hover:bg-[#2C5D66] transition-all"
      >
        Send
      </button>
    </div>
  </ParchmentCard>
</section>
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    
    <div className="relative min-h-screen w-full overflow-hidden bg-[#E0D3AF]">
  <TopNav />
      {/* Map Details Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('/explorer-map-details.svg')" }} />

      {/* Cinematic Background */}
      <motion.div className="absolute inset-0 z-0" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}>
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/campus-bg.webp')" }} />
      </motion.div>

      <main className="relative z-10 p-10 max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <header className="flex justify-between items-start pt-4">
          <div>
            <h1 className="text-4xl font-serif text-[#64513B] font-semibold drop-shadow-sm">Good Morning, {studentData.name}</h1>
            <div className="mt-4 inline-flex items-center gap-3 bg-[#F8F4E8]/60 backdrop-blur-xl px-5 py-3 rounded-full border border-[#64513B]/10 shadow-lg">
              <MapPin size={16} className="text-[#3B727C]" /> 
              <p className="text-[#64513B] font-semibold text-sm">
                {studentData.loc} <span className="mx-3 opacity-40">|</span> 🎯 Today's Mission: Attend DBMS, Visit Library, AI Lab
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <p className="text-sm font-semibold text-[#64513B]">{dateTime.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" })}</p>
              <p className="text-xs text-[#6D5B47]">{dateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <Bell size={22} className="text-[#64513B] cursor-pointer hover:text-[#3B727C] transition-colors" />
          </div>
        </header>
        
        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* NEW: Explore Campus Map Card */}
          <section className="col-span-12">
            <motion.div 
              onClick={() => navigate("/map")}
              whileHover={{ scale: 1.01 }}
              className="bg-[#3B727C] p-8 rounded-[32px] shadow-lg cursor-pointer flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-5 rounded-2xl"><Map size={32} /></div>
                <div>
                  <h2 className="text-2xl font-bold">Explore Campus Map 🧭</h2>
                  <p className="opacity-80">Find routes to your next class, labs, or dining halls</p>
                </div>
              </div>
              <ArrowRight size={32} />
            </motion.div>
          </section>
{/* Building Info Card */}
<section className="col-span-12 md:col-span-6">
  <ParchmentCard title="Library Info">
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#64513B]">Library</h2>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Open</span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-[#E0D3AF]/50 p-3 rounded-xl"><p className="opacity-70">Seats Available</p><p className="font-bold">120</p></div>
        <div className="bg-[#E0D3AF]/50 p-3 rounded-xl"><p className="opacity-70">Floors</p><p className="font-bold">3</p></div>
        <div className="bg-[#E0D3AF]/50 p-3 rounded-xl"><p className="opacity-70">Study Rooms</p><p className="font-bold">Available</p></div>
      </div>
      
      {/* Navigate button linked to the map */}
      <button 
        onClick={() => navigate("/map")} 
        className="w-full py-3 bg-[#3B727C] text-white rounded-full text-sm font-semibold hover:bg-[#2C5D66] transition-all cursor-pointer"
      >
        Navigate
      </button>
    </div>
  </ParchmentCard>
</section>

{/* Live Crowd & Time Section */}
<section className="col-span-12 md:col-span-6 space-y-8">
  <ParchmentCard title="Live Crowd">
    <div className="space-y-4">
      {[
        { name: "Library", status: "Low", color: "text-green-500" },
        { name: "Cafeteria", status: "High", color: "text-red-500" },
        { name: "Lab", status: "Medium", color: "text-yellow-600" }
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-center border-b border-[#64513B]/10 pb-2">
          <span className="font-semibold text-[#64513B]">{item.name}</span>
          <span className={`font-bold ${item.color}`}>● {item.status}</span>
        </div>
      ))}
    </div>
  </ParchmentCard>

  <div className="bg-[#3B727C] p-6 rounded-[32px] text-white flex justify-between items-center shadow-lg">
    <div>
      <p className="text-xs opacity-80 uppercase tracking-widest">Estimated Time</p>
      <h3 className="text-3xl font-bold">2 min</h3>
    </div>
    <p className="font-medium text-white/70">145 meters</p>
  </div>
</section>
          {/* Updated Next Class Card Section */}
<section className="col-span-12 md:col-span-5">
  <ParchmentCard title="Next Class">
    {todaySchedule.map((c, i) => (
      <div key={i} className="text-[#64513B] space-y-3">
        <h2 className="text-2xl font-bold">{c.sub}</h2>
        <div className="text-sm space-y-2">
          <p>👨‍🏫 {c.fac}</p>
          <p>🕘 {c.time}</p>
          <p>📍 Room {c.room} • {c.bldg}</p>
          <p className="font-bold text-[#3B727C]">🚶 {c.walk} walk</p>
        </div>
        
        {/* ADDED onClick navigation here */}
        <button 
          onClick={() => navigate("/map")} 
          className="mt-6 w-full py-3 bg-[#3B727C] text-white rounded-full text-sm font-semibold hover:bg-[#2C5D66] transition-all"
        >
          Navigate
        </button>
      </div>
    ))}
  </ParchmentCard>
</section>


          <div className="hidden md:block md:col-span-2" />

         {/* Bottom Navigation */}
          <section className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/timetable" className="no-underline">
              <ParchmentCard>
                <div className="flex flex-col items-center gap-3 text-[#64513B] font-semibold text-sm">
                  <Calendar size={20} /> Schedule
                </div>
              </ParchmentCard>
            </Link>

            <button onClick={() => setIsNotifOpen(true)} className="text-left">
              <ParchmentCard>
                <div className="flex flex-col items-center gap-3 text-[#64513B] font-semibold text-sm">
                  <Megaphone size={20} /> Notices
                </div>
              </ParchmentCard>
            </button>
            <NotificationPanel isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
            {/* Updated to include navigation */}
{[
  { name: 'Events', icon: Star, path: '/community' }, 
  { name: 'Progress', icon: Trophy, path: '/progress' }
].map(({ name, icon: Icon, path }) => (
  <button key={name} onClick={() => navigate(path)} className="text-left w-full">
    <ParchmentCard>
      <div className="flex flex-col items-center gap-3 text-[#64513B] font-semibold text-sm">
        <Icon size={20} /> {name}
      </div>
    </ParchmentCard>
  </button>
))}
          </section>
        </div>
      </main>
    </div>
  );
};

// Premium Translucent Subtly Blurred Card Component
const ParchmentCard = ({ title, children }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.01 }} 
    transition={{ duration: 0.3 }}
    className="p-8 rounded-[32px] backdrop-blur-sm bg-[rgba(239,230,201,0.65)] border border-[rgba(100,81,59,0.1)] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
  >
    {title && (
      <div className="flex items-center gap-3 text-[#C9A86A] mb-5">
        <Compass size={18} />
        <span className="text-[11px] font-bold uppercase tracking-widest">{title}</span>
      </div>
    )}
    {children}
  </motion.div>
);

export default Dashboard;