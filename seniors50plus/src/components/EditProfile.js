import React from 'react'
import Heading from './Heading'
import Homebtn from '../library/homebtn'
import tempProfile from '../imgs/tempProfile.jpeg'
import FaEdit from 'react-icons/lib/fa/edit'
import Footer from './Footer'
import '../css/editProfile.css'

const EditProfile = () => (
    <div id ="ep-container">
        <Heading/>
        <Homebtn/>
        <div id ="ep-left">
        <img className="ep-profilepic"src={tempProfile} alt="profilepic"/>
        <FaEdit className="edit-right"/>
        <div id ="search-roommate">
        <label>Searching for a Roommate</label><input type ="checkbox"></input>
        </div>
        <div id ="edit-location">
        <p><label>Location:</label>Kennesaw, Ga &nbsp;<FaEdit/></p>
        </div>
        </div>
        <div id ="ep-right">
        <h2>Profile</h2>
        <table>
            <tbody>
                <tr>
                    <td>Question 1</td>
                    <td>Rating 1</td>
                    <td><FaEdit/></td>
                </tr>
                <tr>
                    <td>Question 2</td>
                    <td>Rating 2</td>
                    <td><FaEdit/></td>
                </tr>   
                <tr>
                    <td>Question 3</td>
                    <td>Rating 3</td>
                    <td><FaEdit/></td>
                </tr>   
                <tr>
                    <td>Question 4</td>
                    <td>Rating 4</td>
                    <td><FaEdit/></td>
                </tr>   
                <tr>
                    <td>...</td>
                </tr>
            </tbody>
        </table>

        </div>
        <Footer/>
    </div>
);

export default EditProfile