import { createContext, useState } from "react";

export const SearchContext = createContext("Search");

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
