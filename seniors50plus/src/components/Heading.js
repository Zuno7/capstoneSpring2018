import React from 'react'
import '../css/Heading.css'
import Options from './Options';

const Heading = () => (
    <div id="heading-container">
    <table id ="userOptions" align = "right">
        <tbody>    
            <tr>
                <td className ="welcome"> Welcome username</td>
                <td><Options/></td>
            </tr>
        </tbody>
    </table>    
        <h1 id="headerTitle">Seniors 50+</h1>
    </div>
);

export default Heading