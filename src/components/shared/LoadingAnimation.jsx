import { motion } from 'framer-motion';

export const LoadingAnimation = () => (
  <motion.div 
    animate={{ rotate: 360 }} 
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    className="w-10 h-10 border-4 border-[#064E3B] border-t-transparent rounded-full"
  />
);