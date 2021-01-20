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
import UserManagement from '../';
import UserForm from '../Components/UserForm';
import EditForm from '../Components/EditForm';
 function App() {
  return (
    <div className="App">
  <Router >
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/RoomManagement" component={RoomManagement} />
      <Route exact path="/userman" render={props =><UserManagement {...props} />} />
                <Route exact path="/create" render={props =>(
                    <UserForm heading="Create Room" />
                )}/>
                <Route exact path="/api/edit/:id" render={props =>{
                    return(
                        <EditForm {...props}/>
                    )
                }}/>

      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}


export default App;