import React from 'react';
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
import Main from './Container/Main';
function Routes() {
  return (

    <Router >

<Route render={(props)=>(
            //Layout and sidebar can now receive props
                <Dashboard {...props}>
      <Switch>

        <Route path="/BalanceSheet" component={BalanceSheet} />

        {/* <Route path="/roomManagement" render={props => <UserManagement {...props} />} />
        <Route path="/create" render={props => (
          <UserForm heading="Create Room" {...props} />
        )} />
        <Route exact path="/api/edit/:id" render={props => {
          return (
            <EditForm {...props} />
          )
        }} /> */}


      </Switch>
 </Dashboard>
 )}/>

    </Router>

  );
}


export default Routes;