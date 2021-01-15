import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInOutContainer from './containers';
function App() {
  return (
    <div className="App">
     <SignInOutContainer/>
    </div>
  );
}

export default App;
