import React, { Component } from 'react'
import axios from 'axios'

class Trip extends Component {
  state = {
    
    title: '',
    notes: '',
    date: '',
    location: '',
    weather: '',
    equipment: []

  }

  componentDidMount() {
    this.props.getAllTrips()
  }
  
  getAllTrips = () => {
    const userId = this.props.match.params.userId
    const tripId = this.props.match.params.tripId
       axios.get(`/api/user/${userId}/trip/`).then(res => {
         console.log('hello')
           console.log(res.data)
           this.setState({
               user: res.data,
               trips: res.data.trips
            })
        }).catch((err) => {
          console.log(err)
        })
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }


  handleDelete = () => {
    axios.delete(`/api/trips/${this.state._id}`).then(() => {
      this.props.getAllTrips()
    })
  }

   handleUpdate = () => {
    axios.patch(`/api/trips/${this.state._id}`, this.state).then(() => {
      console.log("Updated Trip")
    })
  }
  render() {
   return (
      <div>
        
       <form>
         <div>
         <label htmlFor ="title">Title</label>
         <input onChange={this.handleChange} placeholder={this.state.username}   value ={this.state.title} type ="text" name="title"/>
         </div>

         <div>
         <label htmlFor ="location">Location</label>
         <input onChange={this.handleChange} value ={this.state.location} type ="text" name="location"/>
         </div>
         <div>
         <label htmlFor ="location">Date</label>
         <input onChange={this.handleChange} value ={this.state.date} type ="text" name="date"/>
         </div>
         <div>
         <label htmlFor ="location">Weather</label>
         <input onChange={this.handleChange} value ={this.state.weather} type ="text" name="Weather"/>
         </div>
         <div>
         <label htmlFor ="location">Notes</label>
         <input onChange={this.handleChange} value ={this.state.notes} type ="text" name="notes"/>
         </div>
         </form>
         </div>
      
    )
  }
}

export default Trip