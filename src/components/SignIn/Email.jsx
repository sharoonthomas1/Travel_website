import React, { useState } from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import { useSign } from '../../useContext/useContext'

function Email({handlerProfile}) {
  const {emailDiactive,SignActive} = useSign()

  const [emailVal , setEmailVal] = useState('test@gmail.com')
  const [password , setPassword] = useState('test@gmail.com')

  return (
     <div>
         <div className="modal">
             <div className="modal-dialog modal-dialog-centered">
                 <div className="modal-content border-0 p-3 shadow">
                     <div className="modal-header">
                      <span  onClick={SignActive}   className='fs-5 btn'><IoChevronBackSharp/></span>
                      <button type="button" className="btn-close" onClick={emailDiactive} ></button>
                     </div>
                     <div className="modal-body p-md-5  p-3 pt-2">
                       <img src="/images/bg_circle-green.svg" width={'200px'} alt="bg_circle-green" />
                       <h4 className='fw-semibold fs-3 mt-4'>Welcome back.</h4>
                       <form>
                         <div class="my-4">
                           <label htmlFor="exampleInputEmail1" class="form-label"><small>Email address</small></label>
                           <input type="email" value={emailVal} class="form-control p-2" placeholder='Email'/>
                         </div>
                         <div class="mt-4 mb-3">
                           <label htmlFor="exampleInputEmail1" class="form-label"><small>Password</small></label>
                           <input type="password" value={password} class="form-control p-2" placeholder='Password'/>
                         </div>
                         <a href="##" className='text-black'>Forgot password?</a>
                          <div className="d-grid">
                              <button className='py-3 btn rounded-5 bg-black text-white mt-5 fw-bold'  onClick={handlerProfile}>Sign in</button>
                          </div>
                       </form>
                     </div>
                 </div>
             </div>
         </div>
      </div>
  )
}

export default Email
