import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://wallpapertops.com/walldb/original/0/6/9/573664.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 42%;
    padding: 20px;
    background-color: white;
    ${mobile({ width:"75%"  })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-transform: capitalize;
`;
const From = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.div`
    border: none;
    padding: 15px 40px;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    text-transform: capitalize;
`;

const Register = () => {
return (
    <Container>
        <Wrapper>
            <Title>create an account</Title>
            <From>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
        <Button>create account</Button>
            </From>
        </Wrapper>
    </Container>
);
};

export default Register
