import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingAI = () => (
  <motion.div 
    className="fixed bottom-8 right-8 z-50 bg-[#0F172A] p-4 rounded-full shadow-2xl cursor-pointer"
    whileHover={{ y: -5 }}
  >
    <Sparkles className="text-[#FBBF24]" size={24} />
  </motion.div>
);