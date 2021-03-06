import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: grey;
  height: 50px;
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:active {
      color: red;
    }
  }
  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`;

class NavBar extends Component {
    render() {
        return (
            <NavBarStyles id="nav-container" class="some-class">
                <Link to="/">Home</Link>
                <div className="right">
                    <Link to="/login">Sign Up</Link>

                    <Link to="/user">Users</Link>
                </div>

            </NavBarStyles>
        );
    }
}

export default NavBar;