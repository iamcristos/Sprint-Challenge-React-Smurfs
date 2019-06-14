import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    background-color: whitesmoke;
    -webkit-box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.71);
    -moz-box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.71);
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.71);

    input{
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        margin: 2rem;
        padding: auto;
    }
`

export default Form;
