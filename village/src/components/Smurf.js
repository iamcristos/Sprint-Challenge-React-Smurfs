import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'
const Smurf = props => {
  const Div = styled.div`
    background-color: lightblue;
    display: flex;
    /* justify-content: space-around; */
    margin: .5rem 1rem;
    width: 200px;
    flex-wrap: wrap;
    div{
      border: 1px solid black;
      margin: .5rem 1rem;
      padding: 1rem;
    };
    span{
      color: red;
      a {
        padding: .2rem;
        color: green;
        text-decoration: none;
      }
      a:last-child{
        color: red;
      }
    }
  `
  console.log(props)
  const id = props.id
  return (
    <Div className="Smurf">
      <span onClick={()=>props.deleteSmurf(id)}>X</span>
      <div>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </Div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);

