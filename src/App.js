import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import InformationPage from "./Pages/InformationPage";
import AdvisingPage from './Pages/AdvisingPage'

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/information" component={InformationPage} />
              <Route exact path="/advising" component={AdvisingPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
