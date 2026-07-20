import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { MapPin, Clock, BookOpen, Users, Coffee } from 'lucide-react';

const schedule = [
  { time: '09:00 AM', title: 'Data Structures', location: 'CSE Block', icon: BookOpen },
  { time: '09:50 AM', title: 'Walk (8 mins)', location: 'Science Wing', icon: MapPin },
  { time: '10:00 AM', title: 'Library Study', location: 'Main Building', icon: BookOpen },
  { time: '12:30 PM', title: 'Lunch', location: 'Central Cafeteria', icon: Coffee },
  { time: '02:00 PM', title: 'Club Meetup', location: 'Activity Center', icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Journey = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-28 pb-12 px-6 max-w-2xl mx-auto"
    >
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F172A]">Today's Journey</h1>
        <p className="text-[#0F172A]/60 mt-2">Your path mapped out for the day.</p>
      </header>

      <div className="relative">
        {/* Dynamic Connector Line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#064E3B]/10" />

        <div className="space-y-8">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative pl-16 group"
            >
              <div className="absolute left-3 w-7 h-7 bg-[#FAF8F5] border-4 border-[#064E3B] rounded-full flex items-center justify-center z-10 shadow-sm">
                <item.icon size={12} className="text-[#064E3B]" />
              </div>

              <GlassCard className="p-6 hover:translate-x-1 transition-transform duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="text-sm text-[#064E3B] font-medium mt-1">{item.location}</p>
                  </div>
                  <span className="text-sm font-bold text-[#0F172A]/40">{item.time}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
