import React, { useState } from 'react';
import NotFound from './Components/NotFound';
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
import { TramRounded } from '@material-ui/icons';
// import RoomManagement from './Container/RoomManagement';


function App(props) {
  const [isLogin , setIslogin] = useState(false);
  function handleLogin(){
    setIslogin(true);
  }
  return (
    <div className="App">
      <Router >
        {/* <Switch>

          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route path="/admin" render={props => <Dashboard {...props} />} />
          

          <Redirect from="/" to="/login" />
        </Switch> */}
        <Switch>
           <Route path="/" render={()=>!isLogin?<Login isLoging={handleLogin} />  
           :
           <Dashboard/>} />
           <Route path='*' component={<NotFound/>}/>
        </Switch>
      </Router>


    </div>
  );
}


export default App;