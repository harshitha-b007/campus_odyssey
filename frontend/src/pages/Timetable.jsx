import React, { useContext, useState, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import navigate
import { MapPin, Clock, AlertTriangle } from 'lucide-react'; // Import icons

const Timetable = () => {
  const { student } = useContext(StudentContext);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute for countdown accuracy
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Helper to calculate time remaining
  const getTimeRemaining = (classTime) => {
    const [hours, mins] = classTime.split(':').map(Number);
    const now = new Date();
    const classDate = new Date();
    classDate.setHours(hours, mins, 0);
    
    const diff = (classDate - now) / 60000;
    if (diff < 0) return "Ongoing/Done";
    if (diff < 60) return `${Math.round(diff)}m left`;
    return `${Math.round(diff / 60)}h left`;
  };

  return (
    <div className="relative min-h-screen w-full p-8 font-sans overflow-hidden text-[#4A3C2A]">
      <div className="fixed inset-0 z-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url('/campus-map-bg.png')" }} />
      <div className="fixed inset-0 z-0 bg-[#E0D3AF]/60 backdrop-blur-[1px]" />

      <main className="relative z-10 max-w-xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#4A3C2A] mb-8 drop-shadow-md">Time Machine</h1>
        
        <div className="space-y-4">
          {student.schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border-2 ${item.color} shadow-lg flex justify-between items-center`}
            >
              <div className="flex items-center gap-6">
                <div className="text-xl font-black text-[#2A2016] w-20">
                  {item.time}
                  <div className="text-[10px] font-normal opacity-60 flex items-center gap-1">
                    <Clock size={10} /> {getTimeRemaining(item.time)}
                  </div>
                </div>
                
                <div className="border-l-2 border-[#4A3C2A]/20 pl-6">
                  <h3 className="text-lg font-bold text-[#2A2016]">{item.subject}</h3>
                  <p className="text-sm font-semibold text-[#4A3C2A]/90 flex items-center gap-1">
                    {item.location} 
                    {item.attendance < 75 && <AlertTriangle size={12} className="text-red-500" />}
                  </p>
                </div>
              </div>

              {/* Navigation Button */}
              <button 
                onClick={() => navigate('/map')}
                className="bg-[#2A2016]/10 hover:bg-[#2A2016]/20 p-3 rounded-full transition-all"
                title="Navigate to class"
              >
                <MapPin size={20} className="text-[#2A2016]" />
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Timetable;