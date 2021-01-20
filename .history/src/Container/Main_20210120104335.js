import UserManagement from '../Components/UserManagement';
import {Switch ,Route} from 'react-router-dom';
import UserForm from '../Components/UserForm';
import EditForm from '../Components/EditForm';
import React from 'react';
import Dashboard from '../Components/Dashboard';
import Sidebar from '../Components/Sidebar';
import {}

export default function Main(props){
    return(
        <div>
            {/* <Switch>
                <Route exact path="/userman" render={props =><UserManagement {...props} />} />
                <Route exact path="/create" render={props =>(
                    <UserForm heading="Create Room" />
                )}/>
                <Route exact path="/api/edit/:id" render={props =>{
                    return(
                        <EditForm {...props}/>
                    )
                }}/>
            </Switch> */}
             <Route path="/login" component={Login} />
      <Route path="/Dashboard" render={props =><Main {...props} />} />
      
      <Redirect from="/" to="/login" /> 
           
            <Dashboard/>
        </div>
    )
}