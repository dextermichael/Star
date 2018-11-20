import React, { Component } from 'react'
import axios from 'axios'

class Trip extends Component {
  state = {
    
    title: '',
    notes: '',
    date: '',
    location:'',
    weather:'', 
    equipment:[]

  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }


  handleDelete = () => {
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
        
       


       <form>
         <div>
         <label htmlFor ="title">Title</label>
         <input onChange={this.handleChange} placeholder={this.state.title} value ={this.state.title} type ="text" name="title"/>
         </div>
        </form>

         <input onBlur={this.handleUpdate}
          onChange={this.handleChange}
          type="text" name="date"
          value={this.state.date}
        />

         <button onClick={this.handleDelete}>X</button>
         </div>

          
      
    )
  }
}

export default Trip