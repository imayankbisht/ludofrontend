import React,{useState , useEffect} from 'react';
import {authUser} from './Authentication/auth';
import './App.css';
import Notification from './Components/Notification';
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
   const [isAuthenticated , setIsauthenticated] = useState(false);
   const [user , setUser] = useState({});
   const [errors , setErrors] = useState("");
   const [notify , setNotify] = useState({isOpen:false , message:"" , type:""})
  
   useEffect(()=>{
    const token = localStorage.getItem('jwtToken');
    if(token){
      setIsauthenticated(true);
    }
    },[]);

  function handleAuth(data){
    authUser(data).then(res=>{
      setUser(res);
      setIsauthenticated(true);
    })
    .catch(e=>{
      setNotify({
        isOpen:true,
        message:e.data.msg,
        type:'error'
      })
    })
  }

  return (
    <div className="App">
      <Router >
        <Switch>
           { isAuthenticated ?<Dashboard user={user} setIsauthenticated={setIsauthenticated} setUser={setUser}/>:<Login errors={errors} isAuth={handleAuth}/>}
           <Redirect from="/" to="/login" />
        </Switch>
      </Router>
     <Notification
       notify={notify}
       setNotify={setNotify}
     />

    </div>
  );
}


export default App;