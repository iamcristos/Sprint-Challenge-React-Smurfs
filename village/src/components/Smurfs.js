import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';
import {Route} from 'react-router-dom'
import axois from 'axios'
class Smurfs extends Component {
  deleteSmurfHandler =async (id)=>{
    console.log(id)
    try {
      const deleteRequest = await axois.delete(`http://localhost:3333/smurfs/${id}`)
      {this.props.smurf(deleteRequest.data)}
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const Div = styled.div`
      border: 1px solid red;
      ul{
        display: flex;
        justify-content: flex-start;
      }
    `
    return (
      <Div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf 
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.deleteSmurfHandler}
              />
            );
          })}
        </ul>
        {/* <Route exact path='/smurf/:id' component = {Smurf}/> */}
      </Div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
