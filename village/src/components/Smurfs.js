import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';
import axois from 'axios';
import PropType from 'prop-types';

const Div = styled.div`
      ul{
        display: flex;
        justify-content: flex-start;
      }
    `
class Smurfs extends Component {
  deleteSmurfHandler =async (id)=>{
    try {
      const deleteRequest = await axois.delete(`http://localhost:3333/smurfs/${id}`)
      this.props.smurf(deleteRequest.data)
    } catch (error) {
      
    }
  }
  render() {
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
      </Div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

Smurf.propType = {
  smurfs:PropType.array
}
export default Smurfs;
