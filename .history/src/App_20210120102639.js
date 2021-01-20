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
import Routes from './routes';
import Main from './Container/Main';
 function App(props) {
  return (
    <div className="App">
  <Router >
    {/* <Switch>
       <Route path="/login" component={Login} />
      <Route path="/Dashboard" render={props =><Main {...props} />} />
      
      <Redirect from="/" to="/login" /> 
     
   
    </Switch> */}
   
<Main/>
  </Router>

  
      </div>
  );
}


export default App;