import React, { useState } from 'react'
import {ShareIt} from "/src/index.js"
import { FaRegHeart } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { useShareIt } from '../../useContext/ShareIte';
import { NavLink } from 'react-router-dom';



function Card02({hotelVal , AddCart}) {
  const [filHeart , setFillHeart] = useState(false)
  const {handlerShareIt} = useShareIt()

  const fillHeart = (id) =>{
    if(hotelVal.id === id){
      setFillHeart(true)
    }
  }

  return (
<div  className='overflow-hidden w-100 position-relative '>
          <div className='card bg-da border-0 m-2 overflow-hidden'>
         <NavLink to='detail'>
                  <img src={hotelVal.wayImg} alt=""  id='card-zoom' className='rounded-2 '/>
         </NavLink>
                <div className='my-3 '>
                   <h6 className='fw-bold'>{hotelVal.heading}</h6>
                  <div>
                     <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
                     <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
                     <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
                     <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
                     <small className='ms-3'>{hotelVal.rating}</small>
                  </div>
                   <p><small>{hotelVal.price ? hotelVal.price : ''}</small></p>
                </div>
            </div>
            <button onClick={() => AddCart(hotelVal)}  className='position-absolute border-0 me-3 mt-3 z-3 end-0 top-0 m-2  bg-white px-2 py-1 rounded-circle'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <div onClick={() => fillHeart(hotelVal.id)}>
                          {
                            filHeart ? (<span className='text-danger'><FaHeart/></span>) : <FaRegHeart/>
                          }
                    </div>
                </button>
                <button onClick={handlerShareIt}  className='position-absolute border-0 me-3 mt-3 z-3 end-0 m-2  bg-white px-2 py-1 rounded-circle' style={{top:'45px'}}>
                   <RiShareBoxLine/>
                </button>
       </div>
  )
}

export default Card02







