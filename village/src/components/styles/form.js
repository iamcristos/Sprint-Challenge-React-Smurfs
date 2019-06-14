import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    background-color: #F2F2F2;
    -webkit-box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.71);
    -moz-box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.71);
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.71);

    input{
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        margin: 2rem;
        padding: auto;
        width: 90%;
        &:hover {
            transition: all 5 ease-in-out;
            font-weight: bolder;
            width: 98%;
        }
    }

    button{
        background-color: #000000;
        color: #F2F2F2;
        width: 90%;
        height: 30px;
        cursor: pointer;
        &:hover {
            transition: all 5 ease-in-out;
            font-weight: bolder;
            width: 98%
        }
    }
`

export default Form;
