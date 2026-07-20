import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Input } from '../components/ui/Input';
import { Compass, BadgeCheck, Lock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  const mockStudent = {
    student_id: 1,
    name: "Arun",
    reg_number: "271004",
    semester: "6th Semester",
    department: "CSE",
    section: "A",
    loc: "Near Main Gate"
  };

  if (
    regNumber.trim() === "271004" &&
    password === "welcome"
  ) {
    // Store mock student data
    localStorage.setItem("student", JSON.stringify(mockStudent));

    // Navigate to Dashboard
    navigate("/dashboard");
  } else {
    alert("Incorrect Registration Number or Password!");
  }
};

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 font-sans">
      {/* 1. Cinematic Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1], x: [0, -20, 0] }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url("/assets/saranathan-gate.png")' }}
      />
      
      {/* Animated Route Path */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <motion.path
          d="M 100 800 Q 400 500 700 400"
          fill="none"
          stroke="#D4A84B"
          strokeWidth="2"
          strokeDasharray="10 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E4D3A]/40 to-[#0B1F33]/50" />

      {/* 2. Floating Journal Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
        className="w-full max-w-[340px] z-10"
      >
        <GlassCard className="p-6 bg-[#F8F4E8]/60 backdrop-blur-md border border-[#D4A84B]/30 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
          
          <div className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-[#D4A84B]/20 blur-xl rounded-full" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <Compass className="w-10 h-10 text-[#D4A84B] opacity-80" />
            </motion.div>
          </div>

          <header className="text-center mb-6">
            <p className="uppercase tracking-[0.25em] text-[#8C6D2D] text-[10px] font-bold mb-1">CAMPUS QUEST</p>
            <h1 className="font-serif text-2xl font-bold text-[#1E3A2F]">Welcome, Explorer</h1>
            <p className="text-[#3A4A42] mt-2 text-[11px] leading-relaxed">
              Your journey through Saranathan begins here.
            </p>
          </header>

          {/* Form wrapper */}
          <div className="space-y-4">
            <div className="relative">
              <BadgeCheck className="absolute left-3 top-3.5 w-4 h-4 text-[#1E4D3A]" />
              <Input 
                placeholder="Registration Number" 
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                className="bg-[#F8F4E8]/50 border-[#1E4D3A]/20 placeholder:text-[#3A4A42]/60 rounded-[12px] py-4 pl-10 text-sm transition-all"
              />
            </div>
            
            <div className="space-y-1 relative">
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-[#1E4D3A]" />
              <Input 
                type="password"
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#F8F4E8]/50 border-[#1E4D3A]/20 placeholder:text-[#3A4A42]/60 rounded-[12px] py-4 pl-10 text-sm transition-all"
              />
              <div className="text-right">
                <button type="button" className="text-[9px] font-bold uppercase tracking-widest text-[#1E3A2F]/70 hover:text-[#1E4D3A]">
                  Forgot Password?
                </button>
              </div>
            </div>

            <Button 
              type="button" 
              onClick={handleLogin}
              className="w-full py-5 bg-[#1E4D3A] hover:bg-[#16324F] hover:shadow-[0_0_20px_rgba(212,168,75,0.4)] text-[#F8F4E8] rounded-[12px] transition-all hover:scale-[1.02] font-medium text-sm"
            >
              Start Exploring →
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-[#8C6D2D] text-[10px] font-bold">
            <MapPin className="w-3 h-3" />
            <span>Destination: Saranathan College</span>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Login;