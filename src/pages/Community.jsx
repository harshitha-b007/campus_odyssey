import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Search, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Data memoized outside component to prevent re-instantiation
const CLUBS = [
  { category: 'Societies', title: 'Robotics Club', members: '124', icon: Users },
  { category: 'Mentorship', title: 'First-Year Guidance', members: '45', icon: Users },
  { category: 'Study Groups', title: 'Quantum Physics', members: '12', icon: Users },
];

export const Community = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-28 pb-12 px-6 max-w-7xl mx-auto space-y-16"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-[#0F172A]">Community Hub</h1>
          <p className="text-[#0F172A]/60 text-lg">Your campus network, simplified.</p>
        </div>
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F172A]/40 group-focus-within:text-[#064E3B] transition-colors" size={20} />
          <input 
            placeholder="Search clubs or events..."
            className="w-full bg-white border border-[#0F172A]/10 rounded-full py-4 pl-12 pr-6 focus:ring-2 focus:ring-[#064E3B]/20 outline-none shadow-sm transition-all"
          />
        </div>
      </header>

      {/* Featured Spaces */}
      <section>
        <div className="grid md:grid-cols-3 gap-6">
          {CLUBS.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="h-full">
              <GlassCard className="p-8 h-full flex flex-col justify-between border-transparent hover:border-[#064E3B]/10">
                <div>
                  <div className="w-12 h-12 bg-[#064E3B]/5 rounded-2xl flex items-center justify-center text-[#064E3B] mb-6">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]">{item.category}</span>
                  <h3 className="text-xl font-bold mt-1 text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-[#0F172A]/60 mt-1">{item.members} members active</p>
                </div>
                <Button variant="secondary" className="w-full mt-6 group">
                  Join Space <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0F172A]">Upcoming Events</h2>
        <div className="grid gap-4">
          {[
            { date: '18', month: 'Jul', title: 'Campus Networking Mixer', loc: 'Main Auditorium' },
            { date: '21', month: 'Jul', title: 'Research Showcase', loc: 'Science Hall' }
          ].map((ev, i) => (
            <GlassCard key={i} className="p-6 flex items-center justify-between hover:bg-white/50 transition-colors">
              <div className="flex items-center gap-6">
                <div className="text-center p-4 bg-[#FAF8F5] rounded-2xl border border-[#0F172A]/5 min-w-[70px]">
                  <span className="block text-xl font-bold text-[#064E3B]">{ev.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#064E3B]/60">{ev.month}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0F172A]">{ev.title}</h4>
                  <p className="text-sm text-[#0F172A]/60 flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {ev.loc}
                  </p>
                </div>
              </div>
              <Button size="sm">Register</Button>
            </GlassCard>
          ))}
        </div>
      </section>
    </motion.div>
  );
};