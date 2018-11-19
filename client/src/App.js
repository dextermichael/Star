import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import TripPage from './components/TripPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LogInPage}/>
            <Route path="/user/:userId" component={TripPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App