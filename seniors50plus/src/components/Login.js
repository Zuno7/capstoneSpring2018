import React from 'react'
import Homebtn from '../library/homebtn'
import '../css/Login.css'

const Login = () => (
    <div>
        <Homebtn/>
        <h1 id ="login-title">Seniors 50+</h1>
        <div id="login-container">
            <h2 id = "login-h2">Please Login</h2>
            <table id="login-table" align="center">
                <tbody>
                    <tr>
                        <td><label>User Name:</label></td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td><input type="password"></input><br/>
                        <a id="forgotpass" href="">forgot password?</a></td>
                    </tr>
                </tbody>
            </table>
            <div className="Loginbtns">
            Login
            </div>
        </div>
    </div>
);

export default Login