import React from "react";
import Header from "./Header";
import "./App.css";
import Contact from "./Contact";
import Splash from "./Splash";
import Menu from "./Menu";
import About from "./About";
import Error404 from "./Error404";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={Splash} />
        <Route path="/contact" render={Contact} />
        <Route path="/menu" render={Menu} />
        <Route path="/about" render={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
