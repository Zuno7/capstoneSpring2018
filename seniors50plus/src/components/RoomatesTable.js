import React from 'react'
import tempPic from '../imgs/tempProfile.jpeg'
import '../css/RoomatesTable.css'

const Rtable = () => (
    <table id ="rtable">
        <tbody>
            <tr>
                <th></th>
                <th>Member Name</th>
                <th>Match Percentage</th>
                <th>Location</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td><img className ="profilepic" src={tempPic} alt ="Profile pic"/></td>
                <td>John Smith</td>
                <td> 82%</td>
                <td>Kennesaw, GA</td>
                <td><a href="./userIdRoomate">View more</a></td>
                <td className="report"><a href="">Report</a></td>
            </tr>
            <tr>
            <td><img className ="profilepic" src={tempPic} alt ="Profile pic"/></td>
            <td>Johnny Storm</td>
            <td> 75%</td>
            <td>Kennesaw, GA</td>
            <td><a href="./userIdRoomate">View more</a></td>
            <td className="report"><a href="">Report</a></td>
        </tr>
        <tr>
        <td><img className ="profilepic" src={tempPic} alt ="Profile pic"/></td>
        <td>Bob Stone</td>
        <td> 67%</td>
        <td>Kennesaw, GA</td>
        <td><a href="./userIdRoomate">View more</a></td>
        <td className="report"><a href="">Report</a></td>
    </tr>
    <tr>
    <td><img className ="profilepic" src={tempPic} alt ="Profile pic"/></td>
    <td>Tod Peterson</td>
    <td> 65%</td>
    <td>Marietta, GA</td>
    <td><a href="./userIdRoomate">View more</a></td>
    <td className="report"><a href="">Report</a></td>
</tr>
        </tbody>
    </table>
);
export default Rtable