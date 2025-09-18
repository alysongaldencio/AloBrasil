import React, { createContext, useContext, useState } from 'react';

interface TooltipContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (context === undefined) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};
