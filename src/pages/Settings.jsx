import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Moon, Accessibility, Sparkles, Languages, RotateCcw, ChevronRight } from 'lucide-react';

// Reusable Switch Component
const Switch = ({ isOn, onToggle }) => (
  <div 
    onClick={(e) => {
      e.stopPropagation(); // Prevents the parent button from triggering
      onToggle();
    }}
    className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 cursor-pointer ${isOn ? 'bg-[#064E3B]' : 'bg-[#0F172A]/10'}`}
  >
    <motion.div animate={{ x: isOn ? 20 : 0 }} className="w-4 h-4 bg-white rounded-full shadow-sm" />
  </div>
);

const SettingItem = ({ icon: Icon, label, action, isDestructive, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between p-4 bg-white border-b border-[#0F172A]/5 last:border-0 hover:bg-[#FAF8F5] transition-colors ${isDestructive ? 'text-red-600' : 'text-[#0F172A]'}`}
  >
    <div className="flex items-center gap-4">
      <div className="p-2 bg-[#0F172A]/5 rounded-lg text-[#0F172A]/70">
        <Icon size={18} />
      </div>
      <span className="font-medium">{label}</span>
    </div>
    {action ? action : <ChevronRight size={18} className="text-[#0F172A]/30" />}
  </button>
);

const SettingGroup = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#0F172A]/40 mb-3 px-1">{title}</h3>
    <div className="bg-white rounded-2xl border border-[#0F172A]/5 shadow-sm overflow-hidden">
      {children}
    </div>
  </div>
);

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-28 pb-12 px-6 max-w-2xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-[#0F172A] mb-8">Settings</h1>

      <SettingGroup title="Account">
        <SettingItem icon={User} label="Profile" />
        <SettingItem icon={Bell} label="Notifications" />
        <SettingItem icon={Shield} label="Privacy" />
      </SettingGroup>

      <SettingGroup title="Preferences">
        <SettingItem icon={Moon} label="Dark Mode" action={<Switch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />} />
        <SettingItem icon={Accessibility} label="Accessibility" />
        <SettingItem icon={Sparkles} label="AI Personality" />
        <SettingItem icon={Languages} label="Language" />
      </SettingGroup>

      <SettingGroup title="Danger Zone">
        <SettingItem icon={RotateCcw} label="Reset Journey" isDestructive onClick={() => console.log('Reset triggered')} />
      </SettingGroup>
    </motion.div>
  );
};
export default Settings;