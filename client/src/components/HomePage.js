import React, { Component } from 'react';
import Carousel from '../components/Carousel'
import styled from 'styled-components'

const Slide = styled.div`
display: flex;
justify-content: center;
 background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

class HomePage extends Component {
  render() {
    return (
      <div>


        <h1>Star Tracker</h1>

        <Carousel/>
      </div>
    );
  }
}

export default HomePage;