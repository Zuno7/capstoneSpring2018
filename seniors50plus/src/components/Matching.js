import React from 'react'
import Heading from './Heading'
import Homebtn from '../library/homebtn'
import Footer from './Footer'
import Rtable from './RoomatesTable'
import '../css/matching.css'

import data from '../library/tempPeople.json'

const Matching = () => (
<div id ="match-container">
    <Heading/>
    <Homebtn/>
    <h1> Matches Found</h1>
    <Rtable data = {data} />
    <Footer/>
</div>
);

export default Matching