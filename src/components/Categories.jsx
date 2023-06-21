import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItem";
import { categories } from "./data"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Categories = () => {
return (
    <Container>
        {categories.map((item) => (
            <CategoriesItem item={item}/>
        ))}
    </Container>
)
}

export default Categories
