import React, { useState } from 'react'
import { useSign } from '../../useContext/useContext'

function SignIn() {

    const {SignDiactive,emailActive} = useSign()
  return (
    <div>
        <div class="modal">
             <div class="modal-dialog modal-dialog-centered">
                 <div class="modal-content border-0 p-3 shadow">
                     <div class="modal-header">
                      <button type="button" class="btn-close" onClick={SignDiactive}></button>
                     </div>
                     <div class="modal-body p-md-4 p-3">
                        <img src="/images/bg_circle-green.svg" width={'200px'} alt="bg_circle-green" />
                        <h4 className='fw-semibold fs-3 mt-4'>Sign in to unlock the<br/> best of Tripadvisor.</h4>
                        <div className='d-grid mt-5'>
                            <div id='googlbtn' className='px-4 py-3 my-2 rounded-5'>
                               <img src="/images/google.png" className='img-fluid ' width={'25px'} />
                                <span className='ms-5 rounded-5 text-black fw-semibold'>
                                Continue with Google
                               </span>
                            </div>
                            <div id='googlbtn' onClick={emailActive} className='px-4 py-3  my-2 rounded-5'>
                            <span class="material-symbols-outlined my-auto">mail</span>
                                  <span className='ms-5 rounded-5 text-black fw-semibold'>
                                  Continue with Email
                             </span>
                            </div>
                        </div>
                      
                     </div>
                      <div class="modal-footer px-5 py-3">
                       <p style={{fontSize:'12px'}} className='text-center'>By proceeding, you agree to our <a className='text-black' href="##">Terms of Use</a> and confirm you have read our <a href="##" className='text-black'>Privacy and Cookie Statement.</a></p>
                       <p style={{fontSize:'12px'}} className='text-center mt-2'>This site is protected by reCAPTCHA and the Google <a href="##" className='text-black'>Privacy Policy</a> and <a href="##" className='text-black'>Terms of Service</a> apply.</p>
                      </div>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default SignIn
