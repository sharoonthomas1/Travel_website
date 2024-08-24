import React from 'react'
import {BlueDark} from "/src/index.js"


function BuildTrip() {
  return (
    <div id='buildTrip' className='mt-5 rounded-2'>
        <div className='p-3 pt-5 p-lg-5 m-2 m-lg-5'>
              <span><small>Powered by AI</small><span className='bg-white p-2 fw-bold ms-2 rounded-2' style={{fontSize:'12px'}}><small>BETA</small></span></span>
              <h1 className='fw-bold display-5 mt-2'>Build a trip<br/> in minutes</h1>
              <p className='fw-semibold fs-5'>Get a personalized itinerary just for you,<br/>  guided by traveler tips and reviews.</p>
              <BlueDark  props='Start a trip with AI'/>
        </div>
    </div>
  )
}

export default BuildTrip
