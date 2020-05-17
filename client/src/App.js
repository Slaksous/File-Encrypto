import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// layout
import Navbar from "./components/layout/Navbar";
// Pages
import About from "./components/pages/About";
import Encrypt from "./components/pages/Encrypt";
import Decrypt from "./components/pages/Decrypt";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/encrypt" component={Encrypt} />
          <Route exact path="/decrypt" component={Decrypt} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
