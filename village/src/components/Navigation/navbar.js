import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavItem = ()=>{
    const Nav = styled.nav`
        display: flex;
        height: 60px;
        justify-content: center;
        background-color: #00A5CC;
        a{
            padding: .5rem 1rem;
            text-decoration: none;
            font-size: 20px;
            color: black;
            &:hover{
                color: #F2F2F2;
            };
        }
    `
    return (
        <Nav>
            <NavLink exact to='/' 
            activeStyle={{color: '#F2F2F2'}}>Smurfs
            </NavLink>
            <NavLink exact to='/add_smurf' 
            activeStyle={{color: '#F2F2F2'}}>Add Smurfs
            </NavLink>
        </Nav>
    )
}

export default NavItem