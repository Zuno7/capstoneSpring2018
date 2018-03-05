import React from 'react'
import Heading from './Heading'
import Footer from './Footer'
import Homebtn from '../library/homebtn'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'
import tempProfile from '../imgs/tempProfile.jpeg'
import '../css/RoomateProfiles.css'

const RoommateProfiles = () => (
    <div id ="rp-container">
        <Heading/>
        <a href="./matches"><ArrowLeft className="ArrowLeft"/></a>
        <Homebtn/>
        <h1 id="rpH1">Name of User</h1>
        <img id="profilepic" src={tempProfile} alt="Profile"/>
        <div className="rProfile1">
            <p><strong>Key Match Points:</strong>&nbsp;Dogs, Non-smoking, Clean</p>
            <p><strong>House Details:</strong>&nbsp;Three Bed Room, Two Bath...</p>
        </div>
        <div className="rProfile2">
            <p><strong>Location:</strong>&nbsp;Kennesaw, GA</p>
            <p><strong>Earlist Move In date:</strong>&nbsp;May 9th</p>
        </div>
        
        <br/>
        <h3>Description</h3>
        <p id ="rpDescription"><br/>
        I am a 52 year old entrepreneur i just retired from my own moving company, and i work part time doing market research. I am a trust worthy honest clean neat and a very respectful person, who would want the same from a roommate. I love reading sports and social events.

        </p>
        <br/>
        <div id="btn-container">
            <a className="rpButtons" href="">Background Check</a>
            <a className="rpButtons" href="">Contact User</a>
        </div>
        <Footer/>
    </div>
    
);

export default RoommateProfiles