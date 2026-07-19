export const tokens = {
  animation: {
    subtle: {
      initial: { opacity: 0, y: 5 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  },
  glassEffect: "bg-glass backdrop-blur-2xl border border-white/40",
  inputBase: "w-full bg-white/50 border border-black/5 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-forest/20 outline-none transition-all duration-300"
};