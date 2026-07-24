import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CampusMap from './pages/CampusMap';
import Timetable from './pages/Timetable'; 
import Attendance from './pages/Attendance'; 
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { ChatProvider } from './context/ChatContext';
import { QuestChat } from './components/QuestChat';
import { NotificationPanel } from './components/NotificationPanel';
import CampusEcho from './pages/CampusEcho';
import TimeMachine from './pages/TimeMachine';
import Community from './pages/Community';

export default function App() {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  return (
    <StudentProvider>
      <ChatProvider>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
  path="/dashboard" 
  element={
    <Dashboard 
      isNotifOpen={isNotifOpen}
      setIsNotifOpen={setIsNotifOpen}
    />
  } 
/>
          <Route path="/map" element={<CampusMap />} />
          <Route path="/timetable" element={<Timetable />} /> 
          <Route path="/attendance" element={<Attendance />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        <Route path="/campus-echo" element={<CampusEcho />} />
        <Route path="/time-machine" element={<TimeMachine />} />
        <Route path="/community" element={<Community />} />
        </Routes>
        <NotificationPanel 
          isOpen={isNotifOpen} 
          onClose={() => setIsNotifOpen(false)} 
        />
      <QuestChat />
      
      </ChatProvider>
    </StudentProvider>
  );
};