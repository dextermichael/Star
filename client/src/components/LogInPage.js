import React, { Component } from 'react'
import axios from 'axios'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const Postion = styled.div`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

  display: flex;
  justify-content: center;
  font-family: 'Amatic SC', cursive;
  `



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
        <Postion>
        <h1>Plan your trip</h1>
        </Postion>
        

        <SignUpForm />
      </div>
    );
  }
}

export default LogInPage;