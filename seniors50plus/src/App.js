import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


//component imports
import AccountInfo from './components/AccountInfo'
import EditProfile from './components/EditProfile'
import Events from './components/Events'
import Home from './components/Home'
import Login from './components/Login'
import Matching from './components/Matching'
import RoommateProfiles from './components/RoomateProfiles'
import Signup from './components/Signup'

//this will be deleted later
import Reference from './components/referenceGuide'
class App extends Component {
  render() {
    return (
        <BrowserRouter default ="l:./user">
          <div>
            <Route path='/' component={Reference}/>
            <Route exact path = '/login' component = { Login }/>
            <Route exact path = '/signup' component = { Signup }/>

            <Route exact path = '/home' component = {Home}/>
            <Route exact path = '/editProfile' component = { EditProfile }/>
            <Route exact path = '/accountInfo' component = { AccountInfo }/>
            <Route exact path = '/matches' component = {Matching}/>
            <Route exact path = '/userIdRoomate' component = { RoommateProfiles }/>

            
            <Route path = '/Events' component = { Events }/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
