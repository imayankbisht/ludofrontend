import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import './App.css';
import SignInOutContainer from './containers';
function App() {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
  );
}

export default App;
