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
    equipment: []
  }

  componentDidMount() {
    this.getAllUsers()
    this.getAllTrips()
  }

  getAllUsers = () => {
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}`).then((res) => {
      console.log(res.data)
      this.setState({user: res.data})
    })
  }

  getAllTrips = () => {
    // make an api call to get one single user's trips
    // On the server URL is '/api/users/:userId/trip'
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}/trip`).then(res => {
      console.log(res.data)
        this.setState({
          trips: res.data,
        })
    })
  }

  handleCreateNewTrip = () => {
    const userId = this.props.match.params.userId
    const payload = {
      title: 'Trip Title',
      notes: 'no title',
      date: 'date',
      location: 'location',
      weather: 'weather',
      equipment: []
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
          {this.state.trips.map((trip) => (
            <div>
              {console.log(trip)}
              <div>{trip.title}</div>
              <div>{trip.location}</div>
              <div>{trip.notes}</div>
              <div>{trip.weather}</div>
              <div>{trip.date}</div>
              <Trip getAllTrips={this.getAllTrips} trips={this.state.trips} key={trip._id} trip={trip} {...this.props} />
            </div>
          ))}
        </TripsContainerStyle>
      </div>
    )
  }
}
export default TripPage