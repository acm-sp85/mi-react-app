import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import UpdateItemContainer from "./containers/UpdateItemContainer";
import BudgetContainer from "./containers/BudgetContainer";
import Navigation from "./components/Navigation";
import AllEquipmentContainer from "./containers/AllEquipmentContainer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/budget" exact component={BudgetContainer} />
          <Route
            path="/all-equipment"
            exact
            component={AllEquipmentContainer}
          />
          <Route path="/update" exact component={UpdateItemContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
