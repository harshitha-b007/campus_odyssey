import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

const STORIES = [
  { id: 1, author: 'Alex, Junior', title: 'The 3am Library Ritual', excerpt: 'We thought we were studying, but it became about the coffee runs...', color: 'bg-emerald-100' },
  { id: 2, author: 'Sarah, Senior', title: 'Advice to my Freshers Self', excerpt: 'Don\'t worry about the grades as much as the people you meet.', color: 'bg-amber-100' },
  { id: 3, author: 'Mark, Grad', title: 'Tradition: The Spring Gala', excerpt: 'The lights, the music, and the one night everyone actually dresses up.', color: 'bg-sky-100' },
  { id: 4, author: 'Elena, Sophomore', title: 'Hidden Campus Gem', excerpt: 'Found the quietest roof access near the Science wing.', color: 'bg-rose-100' },
];

const EchoCard = ({ story }) => (
  <motion.div 
    layout 
    className="break-inside-avoid mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <GlassCard className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className={`h-48 w-full ${story.color} flex items-center justify-center opacity-80`} />
      <div className="p-6 space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]">{story.author}</span>
        <h3 className="text-xl font-bold text-[#0F172A] leading-tight">{story.title}</h3>
        <p className="text-sm text-[#0F172A]/70 leading-relaxed">{story.excerpt}</p>
        
        <div className="pt-4 flex justify-between items-center text-[#0F172A]/30">
          <div className="flex gap-4">
            <button aria-label="Like story" className="hover:text-[#064E3B] transition-colors"><Heart size={18} /></button>
            <button aria-label="Comment on story" className="hover:text-[#064E3B] transition-colors"><MessageCircle size={18} /></button>
          </div>
          <button aria-label="Save story" className="hover:text-[#064E3B] transition-colors"><Bookmark size={18} /></button>
        </div>
      </div>
    </GlassCard>
  </motion.div>
);

export const CampusEcho = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-28 pb-12 px-6 max-w-7xl mx-auto"
    >
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-5xl font-bold text-[#0F172A]">Campus Echo</h1>
        <p className="text-xl text-[#0F172A]/60 max-w-xl mx-auto">
          Stories, traditions, and memories shared by those who walked these halls.
        </p>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {STORIES.map((story) => (
          <EchoCard key={story.id} story={story} />
        ))}
      </div>
    </motion.div>
  );
};