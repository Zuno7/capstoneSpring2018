import React from 'react'
import Heading from './Heading'
import BikeRiders from '../imgs/BikeRiders.jpeg'
import '../css/home.css'
const Home = () => (
   <div id = "home-container">
        <Heading/>
        <img  id ="backgroundImg" src={BikeRiders} alt={"People riding Bikes"}/>
        <div id = "searchMatching">
            Find Matches
        </div>
        <h2>About Us</h2>
    </div>
    
);

export default Home