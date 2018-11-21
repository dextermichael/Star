import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Input } from 'reactstrap';

  const Postion = styled.div`


  display: flex;
  justify-content: center;
 
  `


const TripButton = styled.button`
display: flex;
justify-content: center;
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
      this.setState({ user: res.data })
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
  handleChange = (event, tripId) => {
    const { value, name } = event.target
    const newTrips =[...this.state.trips]
    const mapTrip = newTrips.map(trip =>{
      if (trip._id === tripId){
      trip[name] = value 
      }
      return trip
    })
    this.setState({ trips:mapTrip })
  }



  handleDelete = (tripId) => {
    console.log(tripId)
    const userId = this.props.match.params.userId
    axios.delete(`/api/user/${userId}/trip/${tripId}`).then(() => {
    const newTrips = [...this.state.trips]
    const filterTrip = newTrips.filter(trip =>{
      return trip._id !== tripId
    })

    this.setState({trips: filterTrip})
    })
  }
  handleUpdate = (tripId) => {
    const userId = this.props.match.params.userId
    const findTrip = this.state.trips.find(trip =>{
      return trip._id === tripId
    })
    axios.patch(`/api/user/${userId}/trip/${tripId}`, findTrip).then(() => {
      console.log("Updated Trip")
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username} Trip Page</h1>
<Postion>
        <TripButton onClick={this.handleCreateNewTrip}>
          New Trips
        </TripButton>
        </Postion>

        <TripsContainerStyle>
          {this.state.trips.map((trip) => (
            <div key={trip._id}>
<Card>
  <CardBody>
                <Input onBlur={ () => this.handleUpdate(trip._id)} type="text" onChange={(event) => this.handleChange(event, trip._id)} name="title" value={trip.title} />
                <Input onBlur={ () => this.handleUpdate(trip._id)} type="text" onChange={(event) => this.handleChange(event, trip._id)} name="location" value={trip.location} />
                <Input onBlur={() => this.handleUpdate(trip._id)} type="text" onChange={(event) => this.handleChange(event, trip._id)} name="notes" value={trip.notes} />
                <Input onBlur={() => this.handleUpdate(trip._id)} type="text" onChange={(event) => this.handleChange(event, trip._id)} name="weather" value={trip.weather} />
                <Input onBlur={() => this.handleUpdate(trip._id)} type="text" onChange={(event) => this.handleChange(event, trip._id)} name="date" value={trip.date} />
                <button onClick={() => this.handleDelete(trip._id)}>delete</button>
    </CardBody>
</Card>
            </div>
          ))}
        </TripsContainerStyle>
      </div>
    )
  }
}
export default TripPage