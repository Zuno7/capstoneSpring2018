import React from 'react'
import tempPic from '../imgs/tempProfile.jpeg'
import { Table } from 'react-bootstrap'
import '../css/RoomatesTable.css'

export default function Rtable(props){
    return(
        <Table hover stripped="true" condensed>
            <thead>
                <tr>
                    <th></th>
                    <th>Member Name</th>
                    <th>Match Percentage</th>
                    <th>Location</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
                    {
                        props.data.map(row => (
                            <tr>
                                <td><img  className ="profilepic" src={tempPic}/></td>
                                <td>{row.name}</td>
                                <td>{row.percent}</td>
                                <td>{row.location}</td>
                                <td>{row.more}</td>
                                <td>{row.report}</td>
                            </tr>
                        ))
                    }
                
            </tbody>
        </Table>
    );
}