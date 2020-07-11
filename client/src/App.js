import React from 'react';
import '../src/components/styles/App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Setup from "./components/pages/Setup.js";
import User from "./components/pages/User.js";
import Choices from "./components/pages/Choices.js";


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/"><Home /></Route>
      <Route path="/setup"><Setup /></Route>
      <Route path="/user"><User/></Route>
      <Route path="/choices"><Choices /></Route>
    </Switch>
    </Router>
  );
}

export default App;
