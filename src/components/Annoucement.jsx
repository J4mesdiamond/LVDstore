import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: dodgerblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Annoucement = () => {
  return (
    <div>
        <Container> Get 15% Off After 5 Orders And Free Shipping Over N50000</Container>
    </div>
  )
}

export default Annoucement