import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion } from "./components/Accordion";
import "./App.scss";

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

  return (
    <div className="App">
      <div className="page-title">Brewdog Beer List</div>
      {beers &&
        beers.map((item) => (
          <Accordion key={item.id} title={item.name}>
            <div className="accordion-main-wrapper">
              <div className="accordion-image-wrapper">
                <img
                  className="accordion-image"
                  src={item.image_url}
                  alt="Logo"
                />
              </div>
              <div className="accordion-text-wrapper">
                <span className="accordion-tag">{item.tagline}</span>
                <span className="accordion-date">
                 {item.first_brewed}
                </span>
                <span className="accordion-description">
                  {item.description}
                </span>
              </div>
            </div>
          </Accordion>
        ))}
    </div>
  );
}

export default App;
