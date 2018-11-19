import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'

// TODO: SHOW ALL USERS
// TODO: CREATE FORM TO CREATE USER

class LogInPage extends Component {
  state = {
    users: []
  }

  getAllUsers = () => {
    axios.get('/api/user').then((res) => {
      this.setState({users: res.data})
    })
  }
//
  componentDidMount(){
    this.getAllUsers()
  }

  render() {
    return (
      <div>
        <h1>Log-In To See Your Ideas</h1>
        <h3>All Users: </h3>
        { this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.username}</Link>
          </div>
        )) }

        <SignUpForm />
      </div>
    );
  }
}

export default LogInPage;