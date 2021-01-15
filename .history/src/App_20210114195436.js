import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Redirect
} from "react-router-dom";
import SignInOutContainer from './containers';
import Dashboard from './components/Dashboard';
 function App() {
  return (
    <div className="App">
      <h1>hekllo</h1>
  <Router >
    <Switch>
      <Route path="/login" component={SignInOutContainer} />
      <Route path="/Dashboard" component={Dashboard} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}


export default App;