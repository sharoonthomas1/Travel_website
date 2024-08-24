import React from 'react'
import { Outlet } from 'react-router-dom'
import { IoWalletOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdHeadphones } from "react-icons/md";
import { MdCall } from "react-icons/md";

function ReserveNow() {
  return (
    <div className='row'>
    <div className="col-12 col-lg-7">
       <Outlet/>
    </div>
    <div className="col-12 col-lg-5">
       <div className='shadowCustom p-4 ms-md-4 rounded-2'>
           <h4>Review Order Details</h4>
           <div className='d-flex flex-wrap mt-4'>
             <div className='d-flex'>
             <img src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/0a/49/c9/33.jpg' width={'50%'} className='rounded-1 img-fluid'/>
             <img src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/0a/49/c9/33.jpg' width={'50%'} className='rounded-1 mx-1 img-fluid'/>
             </div>
                <div className='mt-2'>
                  <p className='mb-0 fw-semibold'><small>Private Full Day Old and New Delhi City Tour</small></p>
                  <p><small>4 Hours Old Delhi City Tour - 2:00 PM</small></p>
               </div>  
               <div className='d-flex w-100 justify-content-between'>
                 <p className='mb-0'><small>Booking Fee</small></p>
                 <p className='mb-0'><small>$0.00</small></p>
               </div>
               <div className='d-flex w-100 justify-content-between'>
                 <p className='fw-bold'><small>Total:</small></p>
                 <p className='fw-bold'><small>$30.00</small></p>
               </div>
            </div> 
         </div>
         <div className='shadowCustom p-4 ms-md-4 rounded-2 mt-3 mt-md-4'>
            <h4 className='border-bottom pb-3'>Review Order Details</h4>
            <ul className='list-unstyled ps-0 mt-4'>
                <li className='d-flex my-3'>
                    <span className='fs-4'><IoWalletOutline/></span>
                    <div  className='ms-md-4 ms-2'>
                      <div className='fw-bold'><small>Lowest price guarantee</small></div>
                      <div><small>Find it cheaper? We'll refund the difference</small></div>
                    </div>
                </li>
                <li className='d-flex my-3'>
                    <span className='fs-4'><CiLock/></span>
                    <div  className='ms-md-4 ms-2'>
                      <div className='fw-bold'><small>Privacy protection</small></div>
                      <div><small>We use SSL encryption to keep your data secure</small></div>
                    </div>
                </li>
                <li className='d-flex my-3'>
                    <span className='fs-4'><MdHeadphones/></span>
                    <div  className='ms-md-4 ms-2'>
                      <div className='fw-bold'><small>24/7 global support</small></div>
                      <div><small>Get the answers you need, when you need them</small></div>
                    </div>
                </li>
                <li className='d-flex my-3'>
                    <span className='fs-4'><MdCall/></span>
                    <div  className='ms-md-4 ms-2'>
                      <div className='fw-bold'><small>Give us a call</small></div>
                      <div><small>We’d be happy to help you out with your booking</small></div>
                      <div><small><a href="##" className='text-black'>Call now: +1 855 275 5071</a></small></div>
                    </div>
                </li>
            </ul>
         </div>
    </div>
    <a href="##" className='text-black text-center mt-md-5 mt-2'><small>© 2024 TripAdvisor LLC All rights reserved.  Terms of Use and Privacy Policy.</small></a>
    </div>
  )
}

export default ReserveNow
