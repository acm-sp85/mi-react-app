import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Budget from "./components/Budget";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/budget" exact component={Budget} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
