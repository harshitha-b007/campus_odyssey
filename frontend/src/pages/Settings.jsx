import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Moon, Accessibility, Sparkles, Languages, RotateCcw, ChevronRight } from 'lucide-react';

// Reusable Switch Component
const Switch = ({ isOn, onToggle }) => (
  <div 
    onClick={(e) => {
      e.stopPropagation();
      onToggle();
    }}
    className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 cursor-pointer ${isOn ? 'bg-[#064E3B]' : 'bg-[#0F172A]/10'}`}
  >
    <motion.div animate={{ x: isOn ? 20 : 0 }} className="w-4 h-4 bg-white rounded-full shadow-sm" />
  </div>
);

const SettingItem = ({ icon: Icon, label, action, isDestructive, onClick, darkMode }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between p-4 border-b border-[#0F172A]/5 last:border-0 transition-colors ${
      darkMode ? 'bg-[#1e293b] hover:bg-[#334155] text-white' : 'bg-white hover:bg-[#FAF8F5] text-[#0F172A]'
    } ${isDestructive ? 'text-red-500' : ''}`}
  >
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg ${darkMode ? 'bg-white/10 text-white/70' : 'bg-[#0F172A]/5 text-[#0F172A]/70'}`}>
        <Icon size={18} />
      </div>
      <span className="font-medium">{label}</span>
    </div>
    {action ? action : <ChevronRight size={18} className="opacity-30" />}
  </button>
);

const SettingGroup = ({ title, children, darkMode }) => (
  <div className="mb-8">
    <h3 className={`text-[11px] font-bold uppercase tracking-widest mb-3 px-1 ${darkMode ? 'text-white/40' : 'text-[#0F172A]/40'}`}>
      {title}
    </h3>
    <div className={`rounded-2xl border shadow-sm overflow-hidden ${darkMode ? 'border-white/5' : 'border-[#0F172A]/5'}`}>
      {children}
    </div>
  </div>
);

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen pt-28 pb-12 px-6 max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? 'bg-[#0F172A]' : 'bg-[#F8F4E8]'}`}
    >
      <h1 className={`text-4xl font-bold mb-8 transition-colors ${darkMode ? 'text-white' : 'text-[#0F172A]'}`}>
        Settings
      </h1>

      <SettingGroup title="Account" darkMode={darkMode}>
        <SettingItem icon={User} label="Profile" darkMode={darkMode} />
        <SettingItem icon={Bell} label="Notifications" darkMode={darkMode} />
        <SettingItem icon={Shield} label="Privacy" darkMode={darkMode} />
      </SettingGroup>

      <SettingGroup title="Preferences" darkMode={darkMode}>
        <SettingItem 
          icon={Moon} 
          label="Dark Mode" 
          darkMode={darkMode}
          action={<Switch isOn={darkMode} onToggle={toggleTheme} />} 
        />
        <SettingItem icon={Accessibility} label="Accessibility" darkMode={darkMode} />
        <SettingItem icon={Sparkles} label="AI Personality" darkMode={darkMode} />
        <SettingItem icon={Languages} label="Language" darkMode={darkMode} />
      </SettingGroup>

      <SettingGroup title="Danger Zone" darkMode={darkMode}>
        <SettingItem icon={RotateCcw} label="Reset Journey" isDestructive darkMode={darkMode} onClick={() => console.log('Reset triggered')} />
      </SettingGroup>
    </motion.div>
  );
};

export default Settings;