import React, {useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { useShareIt } from '../../useContext/ShareIte';
import { FaCircle } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import { BiSolidGroup } from "react-icons/bi";
import { TbTimeDuration90 } from "react-icons/tb";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineMobile } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';



function Card02Details() {
    const [adults, setAdults] = useState(2);
    const [room, setRoom] = useState(1);
    const [children, setChildren] = useState(0);
    const [show , setShow] = useState()

    const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    // Ensure the check-out date is after the check-in date
    if (date >= checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };
 
 
    const btnClick = () => {
       setShow(prev => !prev)
    }
 
    const adultsIncrement = () => {
       setAdults(prevCount => prevCount + 1);
    };
 
    const adultsDecrement = () => {
       if(adults >= 1){
          setAdults(prevCount => prevCount - 1);
       }
    };
 
    const roomIncrement = () => {
       setRoom(prevCount => prevCount + 1);
    };
 
    const roomDecrement = () => {
       if(room >= 1){
          setRoom(prevCount => prevCount - 1);
       }
    };
 
    const childrenIncrement = () => {
       setChildren(prevCount => prevCount + 1);
    };
 
    const childrenDecrement = () => {
       if(children >= 1){
          setChildren(prevCount => prevCount - 1);
       }
    };

  return (
         <div>
         <div className='d-flex align-items-center  justify-content-between'>
            <h4 className='fw-bold fs-5'>3-Days Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi</h4>
            <div>
            <button className='border-1 z-3 fs-4 m-2 bg-white px-2 rounded-circle'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <div >
                           <FaRegHeart/>
                    </div>
                </button>
                <button  className='fs-4 border-1 z-3 m-2 bg-white px-2 rounded-circle' style={{top:'45px'}}>
                   <RiShareBoxLine/>
                </button>
            </div>
         </div>
        <a href="##" className='text-black'>By Keeper Landwey</a>
        <div className='my-4'>
          <div>
             <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
             <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
             <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
             <span className='text-success ms-1' style={{fontSize:'13px'}}><small><FaCircle/></small></span>
          </div>
          <a href="##" className='text-black'>309 reviews</a>
           <span className='ms-3'>
           <svg style={{fill:'red'}} viewBox="0 0 24 24" width="22px" height="22px" className="d Vb UmNoP"><path fillRule="evenodd" clipRule="evenodd" d="M14.232 4.13l-2.603-2.134L9.037 4.13l-3.358-.195-.848 3.253L2 8.987l1.227 3.142L2 15.26l2.832 1.813.849 3.244 3.357-.195 2.592 2.133 2.603-2.133 3.358.195.849-3.244 2.832-1.812-1.227-3.13 1.227-3.143-2.832-1.8-.848-3.253-3.36.195zm-3.62 11.833l5.195-5.196-1.414-1.414-3.784 3.784-1.753-1.745-1.412 1.417 3.167 3.154z"></path></svg>
             <small className='ms-2'>Recommended by 98% of travelers</small>
             <span className='ms-2'><IoIosInformationCircleOutline/></span>
           </span>
        </div>
        <div className='row row-cols-1 row-cols-md-2'>
           <div className="col">
              <img src="/public/images/taj.jpg" alt="" className='img-fluid rounded-2 m-2 m-md-0' />
           </div>
           <div className="col">
              <img src="/public/images/traj-2.jpg" alt=""  className='img-fluid rounded-2 m-2 m-md-0'/>
           </div>
        </div>
        <div className='about p-2 row my-4'>
            <div className="col-12 col-lg-8">
                <h5 className='fw-bold'>About</h5>
                 <p>
                 To explore India’s Golden Triangle from Delhi, you’d need to handle all the logistics, including trains, hotels, cabs, tickets, and local guides. Leave all the planning to someone else on this private tour, which includes a driver-guide.
                 </p>
                 <p>from <span className='fs-4 fw-semibold'>$195.75</span> per adult (price varies by group size)</p>
                 <div>
                     <span className='me-3 text-warning'> <IoIosWallet/></span>
                    <a href="##" className='text-black'>Lowest price guarantee</a>.
                    <a href="##" className='text-black'>Free cancellation</a>
                    <ul className='list-unstyled py-3 mt-3 border-top border-bottom'>
                        <li className='my-2'><span className='me-3'><BiSolidGroup/></span>Ages 0-99</li>
                        <li className='my-2'><span className='me-3'><TbTimeDuration90/></span>Duration: 4 days</li>
                        <li className='my-2'><span className='me-3'><IoTimerOutline/></span>Start time: Check availability</li>
                        <li className='my-2'><span className='me-3'><AiOutlineMobile/></span>Mobile ticket</li>
                        <li className='my-2'><span className='me-3'><GiWorld/></span>Live guide: German, Russian, English, French, Spanish</li>
                    </ul>
                    <ul className='list-unstyled py-3 border-bottom'>
                         <p className='fw-semibold'>Highlights</p>
                        <li className='my-2'><span className='me-3'><GoDotFill/></span>Travel the Golden Triangle from Delhi by private air-conditioned vehicle</li>
                        <li className='my-2'><span className='me-3'><GoDotFill/></span>Visit Delhi, Agra, and Jaipur in four days, without travel or ticket hassles </li>
                        <li className='my-2'><span className='me-3'><GoDotFill/></span>Explore the Taj Mahal, Agra Fort, and Amber Fort with personal guides </li>
                        <li className='my-2'><span className='me-3'><GoDotFill/></span>Option to include 4- or 5-star hotels with daily breakfast</li>
                    </ul>
                 </div>
                 <div>
                   <div className="accordion accordion-flush" id="accordionFlushExample">
                       <div className="accordion-item">
                           <h2 className="accordion-header">
                             <button class="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                             What's included
                           </button>
                           </h2>
                           <div id="flush-collapseOne" className="accordion-collapse collapse px-0" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                           </div>
                       </div>
                       <div className="accordion-item">
                          <h2 className="accordion-header">
                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          What to expect
                           </button>
                          </h2>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                       </div>
                       <div className="accordion-item">
                          <h2 className="accordion-header">
                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#return" aria-expanded="false" aria-controls="return">
                        Departure and return
                           </button>
                          </h2>
                          <div id="return" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                       </div>
                       <div className="accordion-item">
                          <h2 className="accordion-header">
                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#Accessibility" aria-expanded="false" aria-controls="Accessibility">
                        Accessibility
                           </button>
                          </h2>
                          <div id="Accessibility" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                       </div>
                       <div className="accordion-item">
                          <h2 className="accordion-header">
                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#Cancellation" aria-expanded="false" aria-controls="Cancellation">
                        Cancellation policy
                           </button>
                          </h2>
                          <div id="Cancellation" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">For a full refund, cancel at least 24 hours in advance of the start date of the experience.</div>
                          </div>
                       </div>
                       <div className="accordion-item">
                          <h2 className="accordion-header">
                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#Help" aria-expanded="false" aria-controls="Help">
                        Help
                           </button>
                          </h2>
                          <div id="Help" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">For a full refund, cancel at least 24 hours in advance of the start date of the experience.</div>
                          </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-12 col-lg-4">
            <div onClick={btnClick} className=" shadowCustom p-4">
                <h5 className='mb-3'>₹28,000 night</h5>
                <div className="d-flex flex-wrap">
                   <div  className=''> 
                     <DatePicker
                       selected={checkInDate}
                       onChange={handleCheckInChange}
                       selectsStart
                       className='p-2 mb-3 rounded-2'
                       startDate={checkInDate}
                       endDate={checkOutDate}
                       minDate={new Date()}
                       dateFormat="yyyy/MM/dd"
                       placeholderText="Select check-in date"
                     />
                  </div>
                   <div  className=''>
                       <DatePicker
                         selected={checkOutDate}
                         onChange={handleCheckOutChange}
                         selectsEnd
                         className='p-2 mb-3 rounded-2'
                         startDate={checkInDate}
                         endDate={checkOutDate}
                         minDate={checkInDate || new Date()}
                         dateFormat="yyyy/MM/dd"
                         placeholderText="Select check-out date"
                         disabled={!checkInDate}
                       />
                   </div>
                </div>
                   <div class="text-black border-1 rounded-2 border p-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className='font-medium text-sm'>{adults}  Adults . </span>
                     <span className='font-medium text-sm'>{children}  Children . </span>
                    <span className='font-medium text-sm'>{room}  room </span>
                   </div>
                   
                </div>
                {
                    show && (
                          <div className='shadowCustom  mt-2 p-4'>
                          <ul className="text-start z-10 bg-white ">
                                 <li className='my-2 d-flex justify-content-between items-items-center'>
                                      <p>Adults</p>
                                      <button className='bg-white border-0'>
                                          <div className='m-2 bor'>
                                            <button onClick={adultsDecrement}  className='px-2 bg-white border-1'>-</button>
                                            <span className='mx-4'>{adults}</span>
                                            <button onClick={adultsIncrement}  className='px-2 bg-white border-1'>+</button>
                                          </div>
                                      </button>
                                 </li>
                                 <li className='my-2 d-flex justify-content-between items-items-center'>
                                      <p>Children</p>
                                      <button className='bg-white border-0'>
                                          <div className='m-2 bor'>
                                            <button onClick={childrenDecrement}  className='px-2 bg-white border-1'>-</button>
                                            <span className='mx-4'>{children}</span>
                                            <button onClick={childrenIncrement}  className='px-2 bg-white border-1'>+</button>
                                          </div>
                                      </button>
                                 </li>
                                 <li className='my-2 d-flex justify-content-between items-items-center'>
                                      <p>Rooms</p>
                                      <button className='bg-white border-0'>
                                          <div className='m-2 bor'>
                                            <button onClick={roomDecrement}  className='px-2 bg-white border-1'>-</button>
                                            <span className='mx-4'>{room}</span>
                                            <button onClick={roomIncrement} className='px-2 bg-white border-1'>+</button>
                                          </div>
                                      </button>
                                 </li>
                                 <li className='mt-5 d-flex justify-content-between'>
                                     <div >
                                       <label htmlFor='ok' className=''>Travelling with pets?</label>
                                       <input id='ok' type='checkbox' className='ms-3 ' />
                                     </div>
                                     <button className='btn btn-primary'>Done</button>
                                 </li>
                        </ul>

                        <div className='mt-5'>
                      <a href="#" className='text-black'>See all 3 tour options</a>
                      <p className='mt-3'>
                      <small>*Likely to sell out: Based on Viator’s booking data and information from the provider from the past 30 days, it seems likely this experience will sell out through Viator, a Tripadvisor company.</small>
                      </p>
                         <NavLink to='/reserve' className='text-decoration-none'>
                      <div className="d-grid">
                            <button className='btn btn-warning px-3 py-2 mt-2'>Reserve Now</button>
                      </div>
                         </NavLink>
                      <p className='d-flex mt-4 mb-0'>
                      <p className='me-3 text-success'><IoTimerOutline/></p>
                        <small>
                             Not sure? You can cancel this reservation up to 24 hours in advance for a full refund.
                        </small>
                      </p>
                  </div>
                          </div>
                    )
                }

             </div>
        </div>

        </div>
  )
}

export default Card02Details
