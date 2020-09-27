import React from 'react';
import './App.css';
import Home from "./Home";
import Admin from "./Admin";

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/admin" component={Admin}/>
    </Router>
  );
}

export default App;
