import React, { Component } from 'react';
import Carousel from '../components/Carousel'
import styled from 'styled-components'

const Slide = styled.div`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
display: flex;
justify-content: center;
font-family: 'Amatic SC', cursive;
 
`

class HomePage extends Component {
  render() {
    return (
      <div>

 <Slide>
        <h1>Star Tracker</h1>
        </Slide>


        <Slide>

        <Carousel/>
        </Slide>
      </div>
    );
  }
}

export default HomePage;