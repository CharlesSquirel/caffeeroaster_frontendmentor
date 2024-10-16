'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface DropdownOptionContextType {
  activeDropdown: string | undefined;
  handleOnClickOption: (name: string) => void;
}

export const DropdownOptionContext = createContext<
  DropdownOptionContextType | undefined
>(undefined);

export default function DropdownOptionProvider({
  children,
}: PropsWithChildren) {
  const [activeDropdown, setActiveDropdown] = useState<string>('');

  const handleOnClickOption = (name: string) => {
    setActiveDropdown(name);
  };

  return (
    <DropdownOptionContext.Provider
      value={{ activeDropdown, handleOnClickOption }}
    >
      {children}
    </DropdownOptionContext.Provider>
  );
}

export const useDropdown = () => {
  const context = useContext(DropdownOptionContext);
  if (context === undefined) {
    throw new Error(
      'useDropdownOption must be used within a DropdownOptionProvider',
    );
  }
  return context;
};
