import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Accordion } from "./components/Accordion";
import { Gallery } from "./components/Gallery";
import { DataContext } from "./BeerContext";
import "./App.scss";

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/BeerGallery">Gallery</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/BeerGallery">
            <BeerGallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  const beers = React.useContext(DataContext);
  return (
    <>
      <div className="page-title">Brewdog Beer List</div>
      {beers &&
        beers.map((item) => (
          <Accordion key={item.id} title={item.name}>
            <div className="accordion__main-wrapper">
              <div className="accordion__image-wrapper">
                <img
                  className="accordion__image"
                  src={item.image_url}
                  alt="Logo"
                />
              </div>
              <div className="accordion__text-wrapper">
                <span className="accordion__tag">{item.tagline}</span>
                <span className="accordion__date">{item.first_brewed}</span>
                <span className="accordion__description">
                  {item.description}
                </span>
              </div>
            </div>
          </Accordion>
        ))}
    </>
  );
}

function BeerGallery() {
  const beers = React.useContext(DataContext);

  return (
    <div class="gallery">
      {beers &&
        beers.map((item) => (
          <Gallery>
            <div className="gallery__item">
              <img
                className="gallery__image"
                src={item.image_url}
                alt="pictures of various beverages"
              />
              <div className="gallery__title">{item.name}</div>
              <div className="gallery__tagline">{item.tagline}</div>
              <div className="gallery__abv">{item.abv}</div>
            </div>
          </Gallery>
        ))}
    </div>
  );
}
