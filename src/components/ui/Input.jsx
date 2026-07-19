export const Input = ({ label, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && <label className="text-sm font-medium text-[#0F172A]">{label}</label>}
    <input 
      className="w-full bg-white/50 border border-[#0F172A]/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#064E3B]/20 outline-none transition-all duration-300 placeholder:text-[#0F172A]/30"
      {...props}
    />
  </div>
);