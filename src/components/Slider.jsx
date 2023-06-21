import React, { useState } from 'react'
import styled from "styled-components"
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import img from '../assets/LVDimg/LVDshrits/img3.png'
import img1 from "../assets/LVDimg/LVDshorts/img2.png"
import img2 from "../assets/LVDimg/LVDtrousers/img4.png"
import { mobile } from '../responsive';
// import {slideData} from "../data"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: .87;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 85%;
    filter:drop-shadow(5px 5px 5px gray);
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    }

return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <Slide bg="f5faf1"z>
            <ImgContainer>
                <Image src={img1}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Summer Sale</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 15% OFF FOR NEW ARRIVALS</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>

        <Wrapper slideIndex={slideIndex}>
            <Slide bg="fcf1ed">
            <ImgContainer>
                <Image src={img2}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Winter Sale</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 15% OFF FOR NEW ARRIVALS</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>

        <Wrapper slideIndex={slideIndex}>
            <Slide bg="fbf0f4">
            <ImgContainer>
                <Image src={img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Popular Sale</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 15% OFF FOR NEW ARRIVALS</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider