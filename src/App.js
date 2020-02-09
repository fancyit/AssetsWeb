import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //BrowserRouter
import './App.css';
import NavBar from './components/Layout/NavBar'
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import AssetsListing from './components/Assets/AssetsListing';


function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Switch>
        <Route path='/' exact component={AssetsListing} />
        <Route path='/Login' component={Login} />
        <Route path='/SignUp' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
