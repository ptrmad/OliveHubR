import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://skoprekedu.pythonanywhere.com/api/olives")
      .then((response) => {
        if (!response.ok) {
          throw new Error("data fetch failed");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        console.log(data);
      });
  }, [data]);

  return (
    <DataContext.Provider value={{ data, error }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && children}
      {children}
    </DataContext.Provider>
  );
}
