import React, { Component } from 'react';
import Carousel from '../components/Carousel'

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