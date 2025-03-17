import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenM, setIsOpenM] = useState(false);

  const toggleSidebar = () => {setIsOpen(prev => !prev);

  }
  const toggleSidebarM= () => {setIsOpenM(prev => !prev);}
  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, isOpenM, toggleSidebarM }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
