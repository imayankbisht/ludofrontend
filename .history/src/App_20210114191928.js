import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInOutContainer from './containers';
function App() {
  return (
    <div className="App">
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}

export default App;
