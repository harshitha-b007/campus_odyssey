import { motion } from 'framer-motion';

export const Button = ({ children, onClick, type = 'button', variant = 'primary', ...props }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    type={type} // Pass the type attribute here
    {...props}  // Pass other props (like className)
    className={`px-6 py-3 rounded-2xl font-medium transition-colors ${
      variant === 'primary' ? 'bg-[#064E3B] text-white' : 'bg-white/70 backdrop-blur-md text-[#0F172A]'
    } ${props.className || ''}`} // Ensure custom classNames are applied
  >
    {children}
  </motion.button>
);