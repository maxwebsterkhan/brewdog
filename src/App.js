import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion } from "./components/Accordion";
import "./App.css";

function App() {
  const [beers, fetchBeers] = useState("");
  const url = "https://api.punkapi.com/v2/beers";
  useEffect(() => {
    fetchAllBeers();
  }, []);

  const fetchAllBeers = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        const allBeers = res.data;
        fetchBeers(allBeers);
        console.log(beers);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  <Accordion title={JSON.stringify(beers[0].name)}>
    <span className="accordion-text">{JSON.stringify(beers[0].tagline)}</span>
    <span className="accordion-text">
      {JSON.stringify(beers[0].description)}
    </span>
  </Accordion>;

  return (
    <div className="App">
      {beers &&
        beers.map((item) => (
          <Accordion title={item.name}>
            <span className="accordion-text">{item.tagline}</span>
            <span className="accordion-text">{item.description}</span>
          </Accordion>
        ))}
    </div>
  );
}

export default App;
