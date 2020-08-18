import React from "react";
import "./App.css";
import Audible from "./products/Audible";
import Sanicloth from "./products/Sanicloth";
import V55 from "./products/V55";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My top Amazon products/services</h1>
        <ul className="productsList">
          <li>
            <Audible />
          </li>
          <li>
            <Sanicloth />
          </li>
          <li>
            <V55 />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
