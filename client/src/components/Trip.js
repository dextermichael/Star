import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const TripStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
  }
  input {
    height: 30%;
    font-size: 1.3rem;
  }
  textarea {
    height: 70%;
  }
`

class Trip extends Component {
  state = {
    title: '',
    description: ''
  }

  componentDidMount(){
    const initialState = {
      _id: this.props.trip._id,
      title: this.props.trip.title,
      description: this.props.trip.description
    }

    this.setState(initialState)
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({[name]: value})
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
      <TripStyles>
        <input onBlur={this.handleUpdate}
          onChange={this.handleChange}
          type="text" name="title"
          value={this.state.title}
        />
        <textarea onBlur={this.handleUpdate}
          onChange={this.handleChange}
          name="description" value={this.state.description}
        />
        <button onClick={this.handleDelete}>X</button>
      </TripStyles>
    )
  }
}

export default Trip