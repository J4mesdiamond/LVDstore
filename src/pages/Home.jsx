import Slider  from '../components/Slider'
import React from 'react'
import Annoucement from '../components/Annoucement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
return (
    <div className="container">
        <Annoucement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
)
}

export default Home