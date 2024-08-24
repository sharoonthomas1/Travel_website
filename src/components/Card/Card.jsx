import React from 'react'
import { useSign } from '../../useContext/useContext'
import { RiShareBoxLine } from "react-icons/ri";
import { useShareIt } from '../../useContext/ShareIte';
import { NavLink } from 'react-router-dom'

function Card({hotelVal}) {
     const {SignActive} = useSign()
     const {handlerShareIt} = useShareIt()

 
  return (
     <div onClick={SignActive}  className='position-relative  w-100' >
               <NavLink to='/cardDetails' className='text-decoration-none  overflow-hidden'>
          <div className='card bg-da border-0 m-2 overflow-hidden'>
                  <img src={hotelVal.StayImg} alt="" id='card-zoom'  className='rounded-2 z-0 img-fluid'/>
                   <div className='mt-3'>
                      <h6 className='fw-semibold mb-1'>{hotelVal.sub ? hotelVal.sub  : ''}</h6>
                      <p><small>{hotelVal.rentalNo ? hotelVal.rentalNo  : " "}</small></p>
                   </div>
                <div className='position-absolute start-0  bottom-0 m-2'>
                     <h4 className='m-0 fw-bold text-white'>{hotelVal.heading ? hotelVal.heading  : ''}</h4>
                </div>
            </div>
               </NavLink>
               <button onClick={handlerShareIt}  className='position-absolute border-0 z-1  me-3 top-0 end-0 m-2  bg-white px-2 py-1 rounded-circle'>
                   <RiShareBoxLine/>
                </button>
       </div>
  )
}

export default Card







