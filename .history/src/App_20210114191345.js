import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";import './App.css';
import SignInOutContainer from './containers';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router >
    <Switch>
      <Route path="/login" component={SignInOutContainer} />
      <Route path="/Dashboard" component={Dashboard} />
      <Redirect from="/" to="/login" />
      
    </Switch>
  </Router>
  ReactDOM.render(routing, document.getElementById('root'))
  );
}

export default App;
