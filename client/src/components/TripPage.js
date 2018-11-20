import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Trip from './Trip'
// Need info about a user
// Need info about that users ideas

const NewTripButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

const TripsContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class TripPage extends Component {
  state = {
    user: {},
    trips: [],
    equipment:[]
  }

  componentDidMount() {
    this.getAllTrips()
  }

  getAllTrips = () => {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}`).then(res => {
      if(res.data.trip === undefined) {
        this.setState({
          user: res.data,
          trips: ["You don't have any trips yet"]
        })
      } else {
        this.setState({
          user: res.data,
          trips: res.data.ideas
        })
      }
    })
  }

  handleCreateNewTrip = () => {
    const userId = this.props.match.params.userId
    const payload = {
      title: 'trip Title',
      description: 'Trip Description'
    }
    axios.post(`/api/user/${userId}/trips`, payload).then(res => {
      const newTrips = res.data
      const newStateTrips = [...this.state.trips, newTrips]
      this.setState({ trips: newStateTrips })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username} Trip Page</h1>
        <NewTripButton onClick={this.handleCreateNewTrip}>
          New Trips
        </NewTripButton>
        <TripsContainerStyle>
          {this.state.trips.map(trip => (
            <Trip getAllTrips={this.getAllTrips} key={trip._id} trip={trip} {...this.props}/>
          ))}
        </TripsContainerStyle>
      </div>
    )
  }
}
export default TripPage