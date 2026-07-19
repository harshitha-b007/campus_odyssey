import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Target, Award, CheckCircle2 } from 'lucide-react';

const QuestItem = ({ task, desc }) => (
  <GlassCard className="p-5 flex items-center justify-between group hover:border-[#064E3B]/30 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[#064E3B]/5 flex items-center justify-center text-[#064E3B]">
        <Target size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-[#0F172A]">{task}</h3>
        <p className="text-xs text-[#0F172A]/50">{desc}</p>
      </div>
    </div>
    <button 
      aria-label={`Complete ${task}`}
      className="text-[#064E3B]/20 hover:text-[#064E3B] transition-colors"
    >
      <CheckCircle2 size={24} />
    </button>
  </GlassCard>
);

export const QuestSystem = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-28 pb-12 px-6 max-w-4xl mx-auto space-y-12"
    >
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-[#0F172A]">Discover Your Campus</h1>
        <p className="text-[#0F172A]/60 text-lg">Every exploration adds to your personal narrative.</p>
      </header>

      {/* Explorer Level - High Contrast Focal Point */}
      <GlassCard className="p-8 bg-[#064E3B] text-white flex justify-between items-center shadow-xl">
        <div className="space-y-1">
          <h3 className="text-sm uppercase tracking-widest text-white/70 font-bold">Explorer Profile</h3>
          <p className="text-3xl font-bold">Navigator</p>
        </div>
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
          <Award size={32} className="text-[#FBBF24]" />
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-lg font-bold">Today's Goals</h2>
          <QuestItem task="Visit the Library" desc="Locate the digital archives" />
          <QuestItem task="Meet a Professor" desc="Say hello at the faculty wing" />
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold">Weekly Milestones</h2>
          <QuestItem task="Explore 5 Buildings" desc="Campus architecture tour" />
          <QuestItem task="Attend a Society Meet" desc="Connect with your peers" />
        </section>
      </div>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-lg font-bold">Total Campus Progress</h2>
          <span className="text-[#064E3B] font-bold text-lg">80%</span>
        </div>
        <div className="h-3 w-full bg-[#0F172A]/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#064E3B]" 
            initial={{ width: 0 }} 
            animate={{ width: "80%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </section>
    </motion.div>
  );
};