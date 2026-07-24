import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const openNotifications = () => {
    setIsNotifOpen(true);
  };

  const closeNotifications = () => {
    setIsNotifOpen(false);
  };

  return (
    <NotificationContext.Provider
      value={{
        isNotifOpen,
        openNotifications,
        closeNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);