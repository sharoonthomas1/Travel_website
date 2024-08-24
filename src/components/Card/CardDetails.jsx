import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";


function CardDetails() {
  return (
    <div>
         <div className='w-75'>
           <h2 className='fw-bold'>Top - World</h2>
           <p><small>When you think of a hotel that checks all the boxes (outstanding service, comfy rooms, the works) it’s probably one of these winning spots.</small></p>
           <p><small>The Travelers’ Choice Awards Best of the Best title celebrates the highest level of excellence in travel. It’s awarded to those who receive a high volume of above-and-beyond reviews and opinions from the Tripadvisor community over a 12-month period. Out of our 8 million listings, fewer than 1% achieve this milestone.</small></p>
         </div>
         <div className='border-top  mt-5 border-2 border-warning '>
            <div id="carouselExample" className="carousel slide pt-5">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/cardDetail-1.jpg" className="d-block w-100 rounded-2 object-fit-cover" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/cardDetail-2.jpg" className="d-block w-100 rounded-2 object-fit-cover" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/cardDetail-3.jpg" className="d-block w-100 rounded-2 object-fit-cover" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/cardDetail-4.jpg" className="w-100 rounded-2 object-fit-cover" alt="..."/>
                  </div>
               </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
              </button>
            </div>
         </div>
         <div className='p-5' style={{backgroundColor:'#f2f1ec'}}>
             <div className="row">
                <div className="col-12 col-lg-8">
            <p className='mb-2 fs-4'>01.</p>
            <h1 className='fw-bold'>Hotel Colline de France</h1>
            <span>
                <span className='me-2'><IoLocationOutline/></span>
                <a href="##" className='text-black'>Gramado, Brazil</a>
            </span>
            <p className='mt-4'>
            Hotel Colline de France sits in a lovely setting, where you'll find a mix of sophistication and comfort. The rooms feel luxe with large beds and L'Occitane amenities, while the Imperial suite is even more  France sits in a lovely setting, where you'll find a mix of sophistication and comfort. The rooms feel luxe indulgent.
            </p>
            <div className='mt-5'>
            <h6 className='fw-semibold mb-3'>What travelers love most</h6>
                <button className='bg-white border-0 rounded-2 m-2 py-2 ms-0 px-3'> Heated Pool</button>
                <button className='bg-white border-0 rounded-2 m-2 py-2 px-3'>  Spa</button>
                <button className='bg-white border-0 rounded-2 m-2 py-2 px-3'> Restaurant</button>
            </div>
                </div>
                <div className="col-12 col-lg-4">
                     <div className='d-flex align-items-center flex-warp'>
                        <div>
                             <span className='fs-2 '>5.0</span>
                         </div>
                        <div className='mx-3'>
                           <span className='text-success ms-1' style={{fontSize:'18px'}}><small><FaCircle/></small></span>
                            <span className='text-success ms-1' style={{fontSize:'18px'}}><small><FaCircle/></small></span>
                            <span className='text-success ms-1' style={{fontSize:'18px'}}><small><FaCircle/></small></span>
                            <span className='text-success ms-1' style={{fontSize:'18px'}}><small><FaCircle/></small></span>
                            <span className='text-success ms-1' style={{fontSize:'18px'}}><small><FaCircle/></small></span>
                         </div>
                         <p className='mb-0'><small>4,395 reviews</small></p>
                     </div>
                      <div>
                    <ul className='list-unstyled ps-0 mt-5'>
                         <li className='mb-2'>
                          <div className='d-flex justify-content-between mb-2'>
                             <span>Location</span>
                             <span>4.9</span>
                           </div>
                           <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-success" style={{width:"100%"}}></div>
                           </div>
                         </li>
                         <li className='mb-2'>
                          <div className='d-flex justify-content-between mb-2'>
                             <span>Cleanliness</span>
                             <span>5.0</span>
                           </div>
                           <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-success" style={{width:"100%"}}></div>
                           </div>
                         </li>
                         <li className='mb-2'>
                          <div className='d-flex justify-content-between mb-2'>
                             <span>Service</span>
                             <span>5.0</span>
                           </div>
                           <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-success" style={{width:"100%"}}></div>
                           </div>
                         </li>
                          
                         <li className='mb-2'>
                          <div className='d-flex justify-content-between mb-2'>
                             <span>Value</span>
                             <span>4.9</span>
                           </div>
                           <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-success" style={{width:"100%"}}></div>
                           </div>
                         </li>
                    </ul>
                 </div>
                   </div>
                      </div>
                </div>
             </div>
  )
}

export default CardDetails


