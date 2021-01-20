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


function App(props) {
  return (
    <div className="App">
      <Router >
        <Switch>

          <Route  path="/login" render={props => <Login {...props} />} />
          <Route path="/admin" render={props => <Dashboard {...props} />} />
          

          <Redirect from="/" to="/login" />
        </Switch>
        
{/* <Dashboard/> */}

      </Router>


    </div>
  );
}


export default App;