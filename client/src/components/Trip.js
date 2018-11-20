import React, { Component } from 'react'
// import styled from 'styled-components'
import axios from 'axios'
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';

// const TripStyles = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   width: 200px;
//   height: 200px;
//   background: #f1faee;
//   margin: 10px 0;
//   button {
//     position: absolute;
//     top: 5px;
//     right: 10px;
//   }
//   input,
//   textarea {
//     background-color: transparent;
//     border: none;
//   }
//   input {
//     height: 30%;
//     font-size: 1.3rem;
//   }
//   textarea {
//     height: 70%;
//   }
// `

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
    const userId = this.props.match.params.userId
    const tripId = this.props.match.params.tripId
       axios.get(`/api/user/${userId}/trip/${tripId}`).then(res => {
           console.log(res.data)
           this.setState({
               user: res.data,
               trips: res.data.trips
              })
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
         <input value ={this.state.userId} type ="text" name="title"/>
         </div>

         <div>
         <label htmlFor ="location">Location</label>
         <input type ="text" name="location"/>
         </div>
         <div>
         <label htmlFor ="location">Date</label>
         <input type ="text" name="date"/>
         </div>
         <div>
         <label htmlFor ="location">Weather</label>
         <input type ="text" name="Weather"/>
         </div>
         <div>
         <label htmlFor ="location">Notes</label>
         <input type ="text" name="notes"/>
         </div>
         </form>
         </div>
      
    )
  }
}

export default Trip