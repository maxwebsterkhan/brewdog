import axios from "axios";
import React, { useEffect, useState } from "react";
export const DataContext = React.createContext();

export function DataProvider({ children }) {
  const [beers, setBeers] = useState("");
  const url = "https://api.punkapi.com/v2/beers";

  useEffect(() => {
    fetchAllBeers();
  }, []);

  const fetchAllBeers = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        const allBeers = res.data;
        setBeers(allBeers);
        console.log(beers);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  const beerContext = {
    beers,
  };

  return (
    <DataContext.Provider value={beerContext}>{children}</DataContext.Provider>
  );
}
