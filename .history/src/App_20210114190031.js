import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import './App.css';
import SignInOutContainer from './containers';
function App() {
  return (
    <div className="App">
     <SignInOutContainer/>
    </div>
  );
}

export default App;
