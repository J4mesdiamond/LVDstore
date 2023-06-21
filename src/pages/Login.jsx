import React, { useState } from 'react'
import styled from "styled-components"
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://i.pinimg.com/originals/4f/a3/8a/4fa38afc975ae01e525829aad13de0eb.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    text-transform: uppercase;
    cursor: pointer;
`;
const Button = styled.div`
    width: 10%;
    border: none;
    padding: 15px 70px;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    text-transform: capitalize;
    margin-bottom: 10px;
    &:disabled{
        background-color: green;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, { username, password })
    }
return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <From>
            <Input 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
                placeholder="Password"
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
                Login 
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>do you not remember the password?</Link>
            <Link>create a new account</Link>
        </From>
    </Wrapper>
</Container>
)
}

export default Login