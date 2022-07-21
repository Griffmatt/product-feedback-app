import React, { createContext, useContext, ReactNode, useState } from "react";

interface props {
  children: ReactNode;
}

interface SortByContextType {
  sortBy: string,
  sortByValue: (value: string) => void
}

const SortByContext = createContext({} as SortByContextType);

export function useSortBy() {
  return useContext(SortByContext);
}

export function SortByContextProvider({ children }: props) {
  const [sortBy, setSortBy] = useState("Most Upvotes");

  const sortByValue = (value: string) => {
    switch (value) {
      case "Most Upvotes":
        setSortBy(value);
        break;
      case "Least Upvotes":
        setSortBy(value);
        break;
      case "Most Comments":
        setSortBy(value);
        break;
      case "Least Comments":
        setSortBy(value);
        break;
    }
  };

  return (
    <SortByContext.Provider value={{ sortByValue, sortBy }}>
      {children}
    </SortByContext.Provider>
  );
}
