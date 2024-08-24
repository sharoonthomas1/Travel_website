import React, { useState } from 'react'
import {SearchBar,BuildTrip,Stay,WayTour,ExploreMore,DreamTrip,PastExperience,Caption01,Caption02,HomeRentals,YouLike,Outdoor} from "/src/index.js"
import ShareIt from '../ShareIt/ShareIt'
import { ShareItProvider } from '../../useContext/ShareIte'


function Home() {

  const [share , setShare] = useState(false)

  const handlerShareIt = () =>{
      setShare(!share)
  }


  return (
    <div>
     <ShareItProvider value={{handlerShareIt}}>
       <ul className='list-unstyled'>
        <li><SearchBar/></li>
        <li className='mt-5'><BuildTrip/></li>
        <li className='mt-5'><Stay/></li>
        <li className='mt-5'><YouLike/></li>
        <li className='mt-5'><WayTour/></li>
        <li className='mt-5'><Outdoor/></li>
        <li className='mt-5'><Caption01/></li>
        <li className='mt-5'><ExploreMore/></li>
        <li className='mt-5'><DreamTrip/></li>
        <li className='mt-5'><PastExperience/></li>
        <li className='mt-5'>
                {
                  share && (<ShareIt/>)
                }
        </li>
        <li className='mt-5 pt-3'><Caption02/></li>
        <li className='mt-5 pt-3'><HomeRentals/></li>
       </ul>
      </ShareItProvider>
    </div>
  )
}

export default Home
