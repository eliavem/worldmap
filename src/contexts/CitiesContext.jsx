import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data ....");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

// Building a custome hook to consume the cities
// context everywhere in the application
function useCities() {
  // We need to tell React which context we actually want to read from
  // because there can be multiple contexts
  const context = useContext(CitiesContext);
  // it means that we are trying to access
  if (context === undefined)
    throw new Error("CitiesContext was used outsude the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
