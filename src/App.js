import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";

import Informations from "./components/Informations";
import Map from "./components/Map";
import Contact from "./components/Contact";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route render={() => <Contact />} path="/Contact" />
        <Route render={() => <Informations />} path="/Informations" />
        <Route render={() => <Map />} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
