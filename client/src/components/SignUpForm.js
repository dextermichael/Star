import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class SignUpForm extends Component {
  state = {
    username: '',
    password: ''
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }
  // make sure it dosent refresh entire page
  handleSubmit = (event) => {
    event.preventDefault()

    // Make post to our api to create new user
    axios.post('/api/user', this.state).then(res => {
      // when we get that data back, we need to navigate to the new users page
      console.log(res.data)
      this.props.history.push(`/user/${res.data._id}`)
    })
    
  }

  render() {
    return (
      <div>
        <h3>Sign-Up</h3>
       
        <form onSubmit={this.handleSubmit}> 
          <div>
            <label htmlFor="username">User Name: </label>
            <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);