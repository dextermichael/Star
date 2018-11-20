import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
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

                <h1>User Page</h1>
            { this.state.users.map((user) => (
                <div key={user._id}>
                  <Link to={`/user/${user._id}`}>{user.username}</Link>
                </div>
              )) }
    </div>
        );
    }
}

export default UserPage;