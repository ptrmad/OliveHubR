import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}
