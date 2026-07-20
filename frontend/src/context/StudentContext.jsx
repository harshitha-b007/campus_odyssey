import { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  
  const [student, setStudent] = useState({
    name: "Harshitha",
    department: "CSE",
    semester: 4,
    schedule: [
    { time: "09:00 AM", subject: "DBMS", location: "RV Block", color: "bg-blue-100 border-blue-200" },
    { time: "10:00 AM", subject: "AI Lab", location: "KS Block", color: "bg-purple-100 border-purple-200" },
    { time: "12:30 PM", subject: "Lunch", location: "Cafeteria", color: "bg-yellow-100 border-yellow-200" },
    { time: "02:00 PM", subject: "Operating Systems", location: "RV Block", color: "bg-green-100 border-green-200" },
    { time: "04:00 PM", subject: "Library", location: "JS Hall", color: "bg-red-100 border-red-200" },
  ],
  attendance: {
    overall: 92,
    subjects: [
      { name: "DBMS", percentage: 94 },
      { name: "AI", percentage: 90 },
      { name: "OS", percentage: 88 },
      { name: "Maths", percentage: 96 }
    ]
  }
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};