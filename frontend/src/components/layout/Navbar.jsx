import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Sun, Moon, Map, Home, BookOpen, Users, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Dashboard', path: '/dashboard', icon: BookOpen },
  { name: 'Map', path: '/map', icon: Map },
  { name: 'Journey', path: '/journey', icon: BookOpen },
  { name: 'Community', path: '/community', icon: Users },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-glass"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#064E3B] rounded-xl" />
        <span className="font-bold text-[#0F172A] tracking-tight">Campus Odyssey</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-[#064E3B]' : 'text-[#0F172A]/70 hover:text-[#0F172A]'}`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#064E3B]"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">
          <Bell size={20} />
        </button>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-[#0F172A]/70 hover:text-[#0F172A] transition-colors"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="w-10 h-10 rounded-full bg-[#0F172A]/10 flex items-center justify-center border border-white/50">
          <User size={20} className="text-[#0F172A]" />
        </div>
      </div>
    </motion.nav>
  );
};