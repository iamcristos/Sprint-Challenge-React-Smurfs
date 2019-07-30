import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

const Div = styled.div`
    background-color: #F2F2F2;
    display: flex;
    margin: .5rem 1.5rem;
    width: 250px;
    flex-wrap: wrap;
    &:hover {
      transform: scaleX(1.1);
      transition: all 5 ease-in-out
    };
    div{
      border: 1px solid black;
      margin: .5rem 1rem;
      padding: 1rem;
    };
    span{
      color: red;
    }
      a {
        padding: 0 .3rem;
        color: green;
        text-decoration: none;
      }
  `
const Smurf = props => {
  const id = props.id
  return (
    <Div className="Smurf">
         <span onClick={()=>props.deleteSmurf(id)}>X</span>
         <Link to={`/smurfs/${id}`}>E</Link>
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

Smurf.propType = {
  name: PropType.string,
  height: PropType.string,
  age: PropType.age,
  deleteSmurf: PropType.func
}
export default withRouter(Smurf);

