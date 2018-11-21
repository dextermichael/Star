import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import HomePage from './components/HomePage'
import TripPage from './components/TripPage'
import NavBar from './components/NavBar'
import UserPage from './components/UserPage'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Amatic SC', cursive;
    background: white;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/user/:userId" component={TripPage}/>
            <Route exact path ="/user" component={UserPage}/>
            <Route path="/" component={HomePage}/>

          </Switch>
         
        </div>
      </Router>
    );
  }
}

export default App;