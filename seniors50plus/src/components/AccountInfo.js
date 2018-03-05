import React from 'react'
import Heading from './Heading'
import Footer from './Footer'
import '../css/AccountInfo.css'

const AccountInfo = () => (
    <div id ="ai-container">
        <Heading/>
        <h1 id="ai-title">Account Information</h1>
        <table id ="ai-table"align="center">
            <tbody>
                <tr>
                    <td><label>Username</label></td>
                    <td><input type="text"></input></td>
                </tr>
                <tr>
                    <td><label>Email Address</label></td>
                    <td><input type="text"></input></td>
                </tr>
            </tbody>
        </table>
        <div id ="btnDelete">
            Delete Account
        </div>
        <Footer/>
    </div>
);

export default AccountInfo