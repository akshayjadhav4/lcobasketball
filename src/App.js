import React from "react";
import "./App.css";
import NavbarCompo from "./Components/NavbarCompo";
import HomeSection from "./Components/HomeSection";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutSection from "./Components/AboutSection";
import Tournament from "./Components/Tournament";
import Team from "./Components/Team";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
function App() {
  return (
    <Router>
      <div>
        <NavbarCompo />
        <Switch>
          <Route path="/" exact component={HomeSection} />
          <Route path="/about" exact component={AboutSection} />
          <Route path="/tournament" exact component={Tournament} />
          <Route path="/team" exact component={Team} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
