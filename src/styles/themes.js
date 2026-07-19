// src/styles/theme.js
export const theme = {
  colors: {
    forest: '#064E3B',
    midnight: '#0F172A',
    gold: '#FBBF24',
    warmWhite: '#FAF8F5',
    glass: 'rgba(255, 255, 255, 0.7)',
  },
};

// src/components/ui/GlassCard.jsx
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);