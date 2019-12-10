import React from 'react'
import styled from 'styled-components';

// import './Person.css'

const StyledDiv = styled.div`
    width: 40%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 20px;
    text-align: center;

    @media (min-width) {
        width: '450px'
    }
`;


const person = (props) => {
    return (
        // <div className='Person' style={style}>

        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </StyledDiv>
    )
};

export default person;