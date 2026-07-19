import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Bell, Calendar, Megaphone, Star, Trophy } from 'lucide-react';

const Dashboard = () => {
  const [studentData] = useState({ name: "Arun", loc: "Near Main Gate" });
  const [todaySchedule] = useState([{ sub: "DBMS", fac: "Dr. Smith", time: "09:50 AM", room: "302", bldg: "CSE Block", walk: "5m" }]);
  const [aiInput, setAiInput] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#E0D3AF]">
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
            {/* Translucent Blur Badge */}
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
          {/* Next Class Card */}
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
                  <button className="mt-6 w-full py-3 bg-[#3B727C] text-white rounded-full text-sm font-semibold hover:bg-[#2C5D66] transition-all">Navigate</button>
                </div>
              ))}
            </ParchmentCard>
          </section>

          <div className="hidden md:block md:col-span-2" />

          {/* AI Assistant Card */}
          <section className="col-span-12 md:col-span-5">
            <ParchmentCard title="Quest AI">
              <div className="text-sm text-[#6D5B47] mb-6">"How can I assist your engineering journey today?"</div>
              <div className="flex gap-3">
                <input className="flex-1 bg-[#E0D3AF]/40 p-3 rounded-2xl text-sm border border-[#64513B]/20 focus:outline-none focus:ring-2 focus:ring-[#3B727C]/30" placeholder="Ask Quest AI..." value={aiInput} onChange={(e) => setAiInput(e.target.value)} />
                <button className="bg-[#3B727C] text-white px-6 rounded-2xl text-sm font-semibold">Send</button>
              </div>
            </ParchmentCard>
          </section>

          {/* Bottom Navigation */}
          <section className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
               { name: 'Schedule', icon: Calendar }, 
               { name: 'Notices', icon: Megaphone }, 
               { name: 'Events', icon: Star }, 
               { name: 'Progress', icon: Trophy }
             ].map(({ name, icon: Icon }) => (
               <ParchmentCard key={name}>
                 <div className="flex flex-col items-center gap-3 text-[#64513B] font-semibold text-sm">
                   <Icon size={20} /> {name}
                 </div>
               </ParchmentCard>
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