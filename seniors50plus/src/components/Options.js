import React from 'react'
import AngleDoubleDown from 'react-icons/lib/fa/align-justify'
import '../css/Options.css'


const Options = () =>(
    <div className="dropdown">
        <AngleDoubleDown className="dropbtn"/>
        <div className="dropdown-content">
            <a href= "./home">Home</a>
            <a href="./editProfile" >Edit profile</a>
            <a href = "./accountInfo">Account information</a>
            <a href = "">Log off</a>
        </div>
    </div>
);
export default Options