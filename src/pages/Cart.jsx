import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Annoucement"
import Footer from "../components/Footer"
import './page.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { PaystackButton } from 'react-paystack';
import { userRequest } from '../requestMethods'
import { useHistory } from 'react-router-dom'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:"10px"  })}
`
const Title = styled.div`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"  })}
`
const Info = styled.div`
    flex: 3;
`
const TopTexts = styled.div`
    ${mobile({ display:"none"  })}
`
const TopText = styled.span`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    text-transform: capitalize;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"  })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ (props) => props.color};
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin:"5px 15px"  })}
`
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom:" 20px"  })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    padding-bottom: 70px;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
// const Summary = styled.div``

const Cart = () => {
    const cart = useSelector(state=>state.cart)
    console.log(cart)
    const [paystackToken, setPaystackToken] = useState(null);
    const history  = useHistory()

    const onToken = (token) => {
        setPaystackToken(token);
    };

    //Paystack API
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "Lvdrrip@gmail.com",
        amount: cart.total * 100,
        publicKey: 'pk_test_d649302b772626e20bcd2739a69d369df801ef0c',
        token: onToken
    };
    const handlePaystackSuccessAction = (reference) => {
        setPaystackToken(cart)
        console.log(reference);
    };
    const handlePaystackCloseAction = () => {
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Check Out',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction
    };

    //User Request
    useEffect(() => {
        const makeRequest = async ()=>{
            try{
                console.log("running")
                // const res = await userRequest.post("checkout/payment",{
                //     tokenId: paystackToken.id,
                //     amount: 500,
                // });
                history.push("/success", {
                    // stripeData: res.data,
                    products: cart, });
            } catch {}
        };
    paystackToken && makeRequest();
}, [paystackToken, cart.total, history]);

    
return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>continue shopping</TopButton>
                    <TopTexts>
                        <TopText>shopping bag</TopText>
                        <TopText>your wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <AddOutlinedIcon/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <RemoveOutlinedIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>${product.price*product.quantity}</ProductPrice>
                            </PriceDetails>
                        </Product>
                        ))}
                        <Hr/>
                        </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$5.99</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$5.99</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <PaystackButton {...componentProps} className='btn' >
                            </PaystackButton>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
)
}

export default Cart