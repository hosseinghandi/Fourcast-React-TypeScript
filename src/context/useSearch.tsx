import React, { createContext, useContext, useState } from "react";

type ContextType = {
  city: string | undefined;
  setCity: React.Dispatch<React.SetStateAction<string | undefined>>;
};

type props = {
  children: React.ReactNode;
};

const SearchContext = createContext<ContextType | null>(null);

export const SearchProvider = ({ children }: props) => {
  const [city, setCity] = useState<string | undefined>(undefined);
  return (
    <SearchContext.Provider value={{ city, setCity }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used inside SearchProvider");
  return context;
};
