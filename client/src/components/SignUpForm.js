import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components'


const Postion = styled.div`
display: flex;
  justify-content: center;
  `

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

      <Postion>
        <h3>Sign-Up</h3>
        </Postion>
       
       <Postion>
        <Form onSubmit={this.handleSubmit}  > 
          <FormGroup>
            <Label htmlFor="username">User Name: </Label>
            <Input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password: </Label>
            <Input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
          </FormGroup>
          <Button color="danger" type="submit">Create User</Button>
        </Form>
        </Postion>
      </div>





    );

}
}

export default withRouter(SignUpForm);