import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../router/Home";
import Detail from "../router/Detail";

function App() {
  return (
    <Router>
      <Route component={Home} exact path="/"></Route>
      <Route component={Detail} exact path="/:id"></Route>
    </Router>
  );
}
export default App;
