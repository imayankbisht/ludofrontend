import UserManagement from '../Components/UserManagement';
import {Switch ,Route} from 'react-router-dom';
import UserForm from '../components/UserForm';
import EditForm from '../components/EditForm';
import React from 'react';

export default function Main(){
    return(
        <div>
            <Switch>
                <Route exact path="/" render={props =><UserManagement {...props} />} />
                <Route exact path="/create" render={props =>(
                    <UserForm heading="Create Room" />
                )}/>
                <Route exact path="/api/edit/:id" render={props =>{
                    return(
                        <EditForm {...props}/>
                    )
                }}/>
            </Switch>
        </div>
    )
}