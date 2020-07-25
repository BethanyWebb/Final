import React from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import User from "./pages/User.js";
import Choices from "./pages/Choices.js";
import RestaurantCard from "./components/Card/Card";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user" component={User} />
        <Route exact path="/choices" component={Choices} />
        <Route exact path="/card" component={RestaurantCard} />
      </div>
    </Router>
  );
}
export default App;