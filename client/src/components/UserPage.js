import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const UserStyle = styled.div`
display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

const Title = styled.div`
display: flex;
  justify-content: center;
  
  
`

class UserPage extends Component {
  state = {
    users: []
  }

  getAllUsers = () => {
    axios.get('/api/user').then((res) => {
      this.setState({ users: res.data })
    })
  }

  
  //
  componentDidMount() {
    this.getAllUsers()
   }

   handleDelete = userId => {
    // some unique value
    axios.delete(`/api/user/${userId}`).then(() => {
      
      const newUser = [...this.state.user]
     
      const filtered = newUser.filter(user => {
        return user._id !== userId 
      })
    
      this.setState({user: filtered})
    })
  }






  render() {
    return (
      <div>
        <Title>
          <div>
            <h1>User Page</h1>
          </div>
        </Title>



        <UserStyle>
        <div>
            <Card>
              <CardTitle > 
                <CardSubtitle>
                  <CardBody>
                  {this.state.users.map((user) => (
            <div key={user._id}>
              <Link to={`/user/${user._id}`}>{user.username}</Link>
              <button onClick={() => this.handleDelete(user._id)}>delete</button>
            </div>
          ))}
                    
                  </CardBody>
                </CardSubtitle>
              </CardTitle>
            </Card>

          </div>
         
        </UserStyle>
      </div>
    );
  }
}

export default UserPage;