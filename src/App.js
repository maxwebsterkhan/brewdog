import axios from "axios";
import React, { useEffect, useState } from "react";
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
    <>
      <Gallery title="Brewdog Gallery">
        <div class="card__wrapper--outer">
          <div class="card__wrapper--inner">
            <div class="card">
              <img src="http://via.placeholder.com/290x150?text=FlexCards" />
              <div class="card__item">
                <h2>{beers[0].name}</h2>
              </div>
              <div class="card__sub">
                <div>Alcohol Percentage</div>
              </div>
              <div class="card__item flexible">
                <div>Beer description goes here</div>
              </div>
            </div>
          </div>
        </div>
      </Gallery>
    </>
  );
}
