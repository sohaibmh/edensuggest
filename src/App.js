import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Audible from "./products/Audible";
import Sanicloth from "./products/Sanicloth";
import V55 from "./products/V55";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/audible" component={Audible} />
          <Route path="/Sani-Cloth" component={Sanicloth} />
          <Route path="/v55" component={V55} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
