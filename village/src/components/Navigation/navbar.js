import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavItem = ()=>{
    const Nav = styled.nav`
        display: flex;
        height: 60px;
        justify-content: center;
        background-color: lightblue;
        a{
            padding: .5rem 1rem;
            text-decoration: none;
            font-size: 20px;
            color: black;
            &:hover{
                color: gray;
            };
        }
    `
    return (
        <Nav>
            <NavLink exact to='/' 
            activeStyle={{color: 'gray'}}>Smurfs
            </NavLink>
            <NavLink exact to='/add_smurf' 
            activeStyle={{color: 'gray'}}>Add Smurfs
            </NavLink>
        </Nav>
    )
}

export default NavItem