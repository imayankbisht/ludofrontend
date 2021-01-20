import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Redirect
} from "react-router-dom";
// import SignInOutContainer from './containers';
import Dashboard from './components/Dashboard';
import Login from './components/login';
 function App() {
  return (
    <div className="App">
  <Router >
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}


export default App;