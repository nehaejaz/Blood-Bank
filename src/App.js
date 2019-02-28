import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import RegisterDonor from './components/donors/RegisterDonor'
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/registerdonor" component={RegisterDonor}></Route>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
