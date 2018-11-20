import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Trip from './Trip'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    axios.post(`/api/user/${userId}/trip`, payload).then(res => {
      const newTrips = res.data
      const newStateTrips = [...this.state.trips, newTrips]
      this.setState({ trips: newStateTrips })
    })
  }
  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  

  handleDelete = (e) => {
    e.preventDefault()
    axios.delete(`/api/trip/${this.state._id}`).then(() => {
     
      this.props.getAllTrips()
    })
  }

   handleUpdate = () => {
    axios.patch(`/api/trip/${this.state._id}`, this.state).then(() => {
      console.log("Updated Trip")
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
            <div key={trip._id}>

            <form onSubmit>
            <Input onBlur={this.handleUpdate} type="text" onChange={this.handleChange} name="title" placeholder={trip.title} />
            <Input onBlur={this.handleUpdate} type="text" onChange={this.handleChange} name="location" placeholder={trip.location} />
            <Input onBlur={this.handleUpdate} type="text" onChange={this.handleChange} name="notes" placeholder={trip.notes} />
            <Input onBlur={this.handleUpdate} type="text" onChange={this.handleChange} name="weather" placeholder={trip.weather} />
            <Input onBlur={this.handleUpdate} type="text" onChange={this.handleChange} name="date" placeholder={trip.date}/>
              <button onClick={this.handleDelete}>delete</button>
</form>





              
              
            
            </div>
          ))}
        </TripsContainerStyle>
      </div>
    )
  }
}
export default TripPage