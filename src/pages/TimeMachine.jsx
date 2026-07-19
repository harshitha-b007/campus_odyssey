import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';

const ERAS = [
  { year: '1990', title: 'The Foundations', desc: 'The campus opens its doors with three buildings and a singular vision.', color: 'bg-stone-300' },
  { year: '2005', title: 'The Expansion', desc: 'The Science Wing is unveiled, drastically increasing research capacity.', color: 'bg-amber-200' },
  { year: '2015', title: 'The Digital Era', desc: 'Full campus connectivity and our first dedicated robotics lab.', color: 'bg-blue-200' },
  { year: '2026', title: 'The Present', desc: 'A thriving hub of innovation and diverse student culture.', color: 'bg-emerald-200' },
  { year: '2035', title: 'The Vision', desc: 'Plans for a fully zero-emission, carbon-neutral expansion.', color: 'bg-indigo-300' },
];

export const TimeMachine = () => {
  const [activeEra, setActiveEra] = useState(ERAS[3]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-28 pb-12 px-6 flex flex-col items-center"
    >
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-5xl font-bold text-[#0F172A]">Campus Time Machine</h1>
        <p className="text-lg text-[#0F172A]/60">Navigate the history and future of our home.</p>
      </header>

      {/* Timeline Controls */}
      <nav aria-label="Campus Timeline" className="flex gap-2 mb-12 overflow-x-auto pb-2 w-full justify-start md:justify-center">
        {ERAS.map((era) => (
          <button
            key={era.year}
            onClick={() => setActiveEra(era)}
            aria-pressed={activeEra.year === era.year}
            className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
              activeEra.year === era.year 
                ? 'bg-[#0F172A] text-white shadow-lg' 
                : 'bg-white border border-[#0F172A]/10 hover:border-[#064E3B]/30'
            }`}
          >
            {era.year}
          </button>
        ))}
      </nav>

      {/* Dynamic Content Display */}
      <main className="w-full max-w-2xl" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra.year}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-10 md:p-12 text-center space-y-6">
              <div className={`w-20 h-20 mx-auto rounded-full ${activeEra.color} opacity-40 shadow-inner`} />
              <h2 className="text-3xl font-bold text-[#0F172A]">{activeEra.title}</h2>
              <p className="text-lg text-[#0F172A]/70 leading-relaxed">{activeEra.desc}</p>
              
              <div className="pt-8 border-t border-[#0F172A]/5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#064E3B]">Alumni Reflection</p>
                <blockquote className="italic text-[#0F172A]/60 mt-3">
                  "That was the year everything changed for us."
                </blockquote>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  );
};