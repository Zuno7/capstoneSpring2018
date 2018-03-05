import React from 'react'
import Homebtn from '../library/homebtn'
import '../css/Signup.css'

const Signup = () => (
    <div>
        <Homebtn/>
        <h1 id ="login-title">Seniors 50+</h1>
        <div id="login-container">
            <h2 id = "login-h2">Sign Up</h2>
            <table id="login-table" align="center">
                <tbody>
                    <tr>
                        <td><label>User Name:</label></td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td><input type="password"></input></td>
                    </tr>
                    <tr>
                        <td><label>ReenterPassword:</label></td>
                        <td><input type="password"></input></td>
                    </tr>
                </tbody>
            </table>
            <div className="Loginbtn">
              Sign Up
            </div>
        </div>
    </div>
);

export default Signup