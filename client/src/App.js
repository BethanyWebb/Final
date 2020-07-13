import React from 'react';
import '../src/components/styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Setup from "./components/pages/Setup.js";
import User from "./components/pages/User.js";
import Choices from "./components/pages/Choices.js";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/setup" component={Setup} />
        <Route exact path="/user" component={User} />
        <Route exact path="/choices" component={Choices} />
      </div>
    </Router>
  );
}

export default App;
