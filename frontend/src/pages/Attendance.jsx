import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { motion } from 'framer-motion';

const Attendance = () => {
  const { student } = useContext(StudentContext);
  const { attendance } = student;

  return (
    <div className="min-h-screen bg-[#E0D3AF] p-8 font-sans text-[#4A3C2A]">
      <h1 className="text-4xl font-serif font-bold mb-10">Attendance</h1>

      {/* Circular Progress Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-[#64513B]/20" />
            <motion.circle 
              initial={{ pathLength: 0 }} animate={{ pathLength: attendance.overall / 100 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="552.9"
              className="text-[#3B727C]" strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-4xl font-black">{attendance.overall}%</p>
            <p className="text-sm uppercase tracking-widest opacity-60">Overall</p>
          </div>
        </div>
      </div>

      {/* Subject List */}
      <div className="max-w-md mx-auto space-y-6">
        {attendance.subjects.map((sub, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between font-bold text-lg">
              <span>{sub.name}</span>
              <span>{sub.percentage}%</span>
            </div>
            <div className="h-3 w-full bg-[#64513B]/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} animate={{ width: `${sub.percentage}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-[#3B727C] rounded-full" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;