import { motion } from 'framer-motion';
import { User, BookOpen, Clock, Award, Settings, QrCode, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  const student = {
    name: "Arun Kumar",
    dept: "Computer Science & Engineering",
    sem: "6th Semester",
    attendance: "88%",
    credits: "124/160",
    id: "2026-QS-9982"
  };

  return (
    <div className="relative min-h-screen bg-[#E0D3AF] p-6 md:p-10">
      
      {/* Background Fade-In Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/profile-bg.png')" }}
      />

      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="relative z-10 flex items-center gap-2 text-[#64513B] font-bold mb-8 hover:opacity-70 transition-opacity"
      >
        <ChevronLeft size={20} /> Back to Dashboard
      </button>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Profile Card Pop-Up Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          className="bg-[#F8F4E8] p-8 md:p-12 rounded-[32px] border border-[#64513B]/10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 bg-[#64513B]/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <User size={48} className="text-[#64513B]" />
            </div>
            <h1 className="text-3xl font-bold text-[#64513B]">{student.name}</h1>
            <p className="text-[#64513B]/60 font-medium">{student.dept}</p>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: BookOpen, label: "Semester", val: student.sem },
              { icon: Clock, label: "Attendance", val: student.attendance },
              { icon: Award, label: "Credits", val: student.credits },
              { icon: QrCode, label: "Student ID", val: student.id }
            ].map((item, i) => (
              <div key={i} className="bg-[#E0D3AF]/30 p-5 rounded-2xl border border-[#64513B]/5 flex items-center gap-4">
                <div className="bg-white/50 p-3 rounded-xl"><item.icon size={20} className="text-[#3B727C]" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold opacity-60 text-[#64513B]">{item.label}</p>
                  <p className="font-bold text-[#64513B]">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Settings Shortcut */}
          <button 
            onClick={() => navigate('/settings')}
            className="w-full py-5 bg-[#64513B] text-[#F8F4E8] rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#4a3d2c] transition-all"
          >
            <Settings size={20} /> Account Settings
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;