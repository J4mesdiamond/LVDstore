import React from 'react'
import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column"  })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.div`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    text-transform: capitalize;
` 
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img``
const ListItem = styled.li`
    width: 50%;
    padding-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    ${mobile({ paddingLeft:"25px",paddingTop:"25px"  })}
    ${mobile({ backgroundColor:"#fff8f8" })}
`

const Footer = () => {
return (
    <Container>
        <Left>
            <Logo>L.V.D Store</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia amet, nobis at tempore earum voluptates tempora impedit asperiores doloribus dolor. Sapiente dolore, totam earum consequuntur blanditiis reiciendis error dicta explicabo.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="36e600">
                    <WhatsAppIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>home</ListItem>
                <ListItem>cart</ListItem>
                <ListItem>men fashion</ListItem>
                <ListItem>women fashion</ListItem>
                <ListItem>accessories</ListItem>
                <ListItem>my account</ListItem>
                <ListItem>order tracking</ListItem>
                <ListItem>wishlist</ListItem>
                <ListItem>term</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <MapIcon style={{marginRight:"10px"}}/> No.5 Yaba Market, lagos Nigeria
            </ContactItem>
            <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> +234 908 441 8519
            </ContactItem>
            <ContactItem>
            <EmailOutlinedIcon style={{marginRight:"10px"}}/> L.V.D@gmail.com
            </ContactItem>
            <Payment/>
        </Right>
    </Container>
)
}

export default Footer
