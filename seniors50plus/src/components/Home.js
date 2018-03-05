import React from 'react'
import Heading from './Heading'
import BikeRiders from '../imgs/BikeRiders.jpeg'
import AboutusPic from '../imgs/AboutusProp.jpg'
import Footer from './Footer'
import '../css/home.css'

const Home = () => (
   <div id = "home-container">
        <Heading/>
        <img  id ="backgroundImg" src={BikeRiders} alt={"People riding Bikes"}/>
        <div id ="homeBlock2">
            <div id = "searchMatching">
                Need a Roommate???<a href ="/matches">Find Roommates</a>
            </div>
        </div>
        <h2 id = "aboutUs">About Us</h2>
        <div id ="about1">
            <img id="aboutPic"src={AboutusPic} alt="person on the computer"/>
        </div>
        <div id="about2">
        <p>This is a description of the website. In this paragraph the user will be informed how and why the website was founded.</p>
        </div>
        <Footer/>
    </div>
    
);

export default Home