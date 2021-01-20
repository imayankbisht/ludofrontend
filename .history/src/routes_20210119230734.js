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
// import RoomManagement from './Container/RoomManagement';
import UserManagement from './Components/UserManagement';
import UserForm from './Components/UserForm';
import EditForm from './Components/EditForm';
import BalanceSheet from './Components/balanceSheet';
 function Routes() {
  return (
    <div className="App">
  <Router >
    <Route render={(props)}
  </Router>
      </div>
  );
}


export default Routes;