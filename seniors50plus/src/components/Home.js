import React from 'react'
import Heading from './Heading'
import BikeRiders from '../imgs/BikeRiders.jpeg'
import AboutusPic from '../imgs/AboutusProp.jpg'
import Footer from './Footer'
import AtlantaBraves from '../imgs/AtlantaBraves.jpg'
import CraftBeer from '../imgs/craftBeer.jpeg'
import '../css/home.css'

const Home = () => (
   <div id = "home-container">
        <Heading/>
        <img  id ="backgroundImg" src={BikeRiders} alt={"People riding Bikes"}/>
        <div id ="homeBlock2">
            <div id = "searchMatching">
                Need a Roommate???&nbsp;<a href ="/matches">Find Roommates</a>
            </div>
            <div id="homeEvent">
                <strong>Events</strong>
                <table id="table-event">
                    <tbody>
                        <tr>
                            <td><img id="homeEvent1" src={AtlantaBraves} alt="Braves"/>
                            <br/>Come join us at the Atlanta Braves march 29th!!</td>
                            <td><img id="homeEvent2" src={CraftBeer} alt="Beer store"/>
                            <br/>Come in on Sunday and learn how to brew  your own beer!</td>
                        </tr>
                    </tbody>
                </table>
            </div>        
        </div>
        <h2 id = "aboutUs">About Us</h2>
        <div id ="about1">
            <img id="aboutPic"src={AboutusPic} alt="person on the computer"/>
        </div>
        <div id="about2">
        <p>This is a description of the website. In this paragraph the user will be informed how and why the website was founded.</p>
        <p><strong>Contact us:</strong> someemail@somewhere.com</p>
        </div>
        <Footer/>
    </div>
    
);

export default Home