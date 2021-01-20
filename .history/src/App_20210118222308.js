import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Redirect
} from "react-router-dom";
// import SignInOutContainer from './containers';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import RoomManagement from './Container/RoomManagement';
 function App() {
  return (
    <div className="App">
  <Router >
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/RoomManagement" component={RoomManagement} />
      

      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}


export default App;