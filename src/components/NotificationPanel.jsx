import React from 'react';
import { X, Bell, AlertTriangle, Briefcase, BookOpen, Zap, Bus, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Ensure this is imported

const notifications = [
  { id: 1, type: 'alert', title: 'Classes Cancelled', desc: 'All morning sessions are suspended.', icon: AlertTriangle, color: 'text-red-500' },
  { id: 2, type: 'exam', title: 'Exam Tomorrow', desc: 'Ensure you have your hall ticket ready.', icon: GraduationCap, color: 'text-indigo-500' },
  { id: 3, type: 'library', title: 'Library Update', desc: 'The facility closes at 8:00 PM today.', icon: BookOpen, color: 'text-blue-500' },
  { id: 4, type: 'hackathon', title: 'Hackathon Registration', desc: 'Registrations are now open for all students.', icon: Zap, color: 'text-yellow-500' },
  { id: 5, type: 'attendance', title: 'Attendance Shortage', desc: 'Check your status in the portal.', icon: AlertTriangle, color: 'text-orange-500' },
  { id: 6, type: 'bus', title: 'Bus Delayed', desc: 'Route 4 is delayed by 20 minutes.', icon: Bus, color: 'text-purple-500' },
  { id: 7, type: 'fee', title: 'Fee Pending', desc: 'Last date for submission is Friday.', icon: Briefcase, color: 'text-green-500' },
];

export const NotificationPanel = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // 2. Initialize the hook

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-[#F8F4E8] shadow-2xl z-50 p-6 overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-xl text-[#64513B] flex items-center gap-2">
          <Bell size={20} /> Quick Alerts
        </h2>
        <button onClick={onClose}><X size={20} /></button>
      </div>

      <div className="space-y-4 flex-grow">
        {notifications.map((n) => (
          <div key={n.id} className="relative bg-white p-4 rounded-2xl border border-[#64513B]/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#3B727C] rounded-full" />
            <div className="flex items-start gap-3">
              <div className={`${n.color} mt-1`}><n.icon size={18} /></div>
              <div className="pr-4">
                <h4 className="font-bold text-sm text-[#64513B]">{n.title}</h4>
                <p className="text-xs text-[#64513B]/60 mt-1 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Moved button to the bottom */}
      <div className="mt-8">
        <button 
          onClick={() => {
            onClose();
            navigate('/campus-echo');
          }}
          className="w-full py-3 bg-[#3B727C] text-white rounded-xl text-sm font-bold hover:bg-[#2C5D66] transition-all"
        >
          See All Notices
        </button>
      </div>
    </div>
  );
};