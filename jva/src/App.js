import React from "react";
import "./App.css";
import Nav from "./features/nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routes";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
