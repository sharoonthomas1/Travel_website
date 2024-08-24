import React, { useCallback, useEffect, useState } from 'react'
import { GrLanguage } from "react-icons/gr";
import { LangData } from '../../../Data/LangUSD';
import { USD } from '../../../Data/LangUSD';
import {SignIn} from "/src/index.js"
import { ThemeProvider } from '../../../useContext/useContext';
import Email from '../../SignIn/Email';
import Profile from '../Profile/Profile';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [lang, setLang] = useState(false);
  const [sign, setSign] = useState(false);
  const [email, setEmail] = useState(false);

  const [longIn , setLongIn] = useState(false)
  const [appendSearch , setAppendSearch] = useState(false)


  // Start-DarkTheme
  const html = document.querySelector('html');
  const darkTheme = useCallback(() =>{
    if(html.getAttribute('data-bs-theme') !== 'dark'){
      html.setAttribute('data-bs-theme' , 'dark')
      localStorage.setItem('themeMode' , 'dark')
     } else{
     html.setAttribute('data-bs-theme' , 'light')
     localStorage.setItem('themeMode' , 'light')
   }
  },[])

  const themeMode = localStorage.getItem('themeMode')
  if(themeMode == 'dark'){
    html.setAttribute('data-bs-them' , themeMode)
  }
  // End-DarkTheme


  // Start-scroll-content
      window.addEventListener('scroll' , () =>{
         if(window.pageYOffset > 160){
             setAppendSearch(true)
         } if(window.pageYOffset <= 0){
             setAppendSearch(false)
         }
      })
  // end-scroll-content

 
  const langActive = () =>{
    setLang(true)
  }

  const langFalse = () =>{
    if(lang){
      setLang(false)
    }
  }
  const SignActive = () =>{
    setSign(true)
    setEmail(false)
  }
  const SignDiactive = () =>{
    if(sign){
      setSign(false)
    }
  }

  const emailActive = () =>{
    setEmail(true)
    setSign(false)
  }

  const emailDiactive = () =>{
    setEmail(false)
  }

  const handlerProfile = () =>{
    setLongIn(true)
      emailDiactive()
  }

  useEffect(()=>{
    const LogIn = JSON.parse(localStorage.getItem("LogIn"))
    if(LogIn){
      setLongIn(LogIn)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem('LogIn' , longIn)
  },[longIn])

  return (
    <ThemeProvider value={{SignActive , langActive ,SignDiactive ,emailActive,emailDiactive ,setLongIn}}>
    <div className='bg-white'>
       <nav className="navbar navbar-expand-lg bg-white" >
         <a id='logo-anchor' className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="logo" width={'60%'}/>
         </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-semibold text-black mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Discover
          </a>
          <ul className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item py-2" href="#">Travelers' Choice</a></li>
            <li><a className="dropdown-item py-2" href="#">Travelers' Choice</a></li>
          </ul>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-semibold text-black mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Trips
          </a>
          <ul className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item py-2" href="#">View my trips</a></li>
            <li><a className="dropdown-item py-2" href="#">Start a new trip</a></li>
            <li><a className="dropdown-item py-2" href="#">Create trip with AI</a></li>
            <li><a className="dropdown-item py-2" href="#">Hire a trip designer</a></li>
          </ul>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-semibold text-black mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Review
          </a>
          <ul className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item py-2" href="#">Write a review</a></li>
            <li><a className="dropdown-item py-2" href="#">Post photos</a></li>
            <li><a className="dropdown-item py-2" href="#">Add a place</a></li>
          </ul>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-semibold text-black mx-2" href="#" data-bs-toggle="dropdown" >
          More
          </a>
          <ul className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item py-2" href="#">Cruises</a></li>
            <li><a className="dropdown-item py-2" href="#">Rental Cars</a></li>
            <li><a className="dropdown-item py-2" href="#">Forums</a></li>
          </ul>
            </li>
          </ul>
        <div className='d-flex'>
                <div className="d-flex gap-3">
                   <button type="button" onClick={langActive} className="btn btn-outline-dark rounded-5 py-2 px-3 fw-semibold" >
                        <span className='pe-2 border-end'><GrLanguage/></span>
                        <span className='ps-2'>USD</span>
                   </button>
                           {
                    longIn ? (
             <>
                <div className='mt-3 mt-md-0'>
                   <Profile/>
                </div>
             </>
                    ) :   (
                      <button onClick={SignActive}  className="btn bg-black text-white rounded-5 py-2 px-3 fw-semibold">Sign in</button>
                     )
                    }
                </div>
              {
                lang && (
                  <div className="modal modal-lg "  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-3">
                      <div className="modal-header p-3">
                            <h1 className="modal-title fs-4 fw-bold" id="exampleModalLabel">Preferences</h1>
                            <button type="button" className="btn-close" onClick={langFalse}></button>
                        </div>
                        <div className='modal-body'>
                            <ul class="nav nav-pills ">
                            <li class="nav-item m-2"><a href="##" className="px-3 py-2 btn btn-outline-dark active"
                            data-bs-target="#language" data-bs-toggle="tab">language</a></li>
                            <li class="nav-item m-2"><a href="##" className="px-3 py-2 btn btn-outline-dark" data-bs-target="#currency"
                        data-bs-toggle="tab">currency</a></li>
                            </ul>
                            <div class="tab-content m-3">
                                  <div className="active tab-pane" id="language">
                                     <div className='fs-5 fw-bold'>Choose a region and language</div>
                                      <ul className='list-unstyled row row-cols-lg-4 ps-0'>
                                         {
                                           LangData.map((item , index) =>(
                                            <li  className='col'>
                                               <div id='lang' className='m-2 p-2 rounded-2'>
                                                 <p className='mb-0'><small>{item.country}</small></p>
                                                 <p className=' mb-0' style={{fontSize:'14px'}}><small>{item.lang}</small></p>
                                               </div>
                                            </li>
                                           ))
                                         }
                                      </ul>
                                  </div>
                                   <div className="tab-pane" id="currency">
                                     <div className='fs-5 fw-bold'>Choose a currency</div>
                                        <ul className='list-unstyled row row-cols-lg-4 ps-0'>
                                           {
                                            USD.map((item) =>(
                                              <li  className='col'>
                                                 <div id='lang' className='m-2 p-2 rounded-2'>
                                                   <p className='mb-0'><small>{item.country}</small></p>
                                                   <p className=' mb-0' style={{fontSize:'14px'}}><small>{item.lang}</small></p>
                                                 </div>
                                              </li>
                                             ))
                                           }
                                        </ul>
                                   </div>
                               </div>
                            <p style={{fontSize:'12px'}} className='text-center mb-0 border-top pt-2'>Any changes to the preferences are optional, and will persist through your user session.</p>
                        </div>
                      </div>
                  </div>
                  </div>
                )
              }
        {/* <button className='btn btn-dark me-3' onClick={darkTheme}>Theme</button> */}
        </div>
        
         {
          sign && <SignIn/> 
         }
         {
          email && <Email handlerProfile={handlerProfile}/>
         }
          </div>
       </nav>

       {
        appendSearch &&
         (
          <div id='menu' className='my-1 border-1 border-black border-bottom'>
               <ul className='list-unstyled d-flex'>
                   <li><NavLink id='appendSearchUl' to='/hotels' className={({isActive}) =>`${isActive ? 'isActive' : "NotActive"} ms-0 mx-3`
                                    }>Home</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Things' className={({isActive}) =>`${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Things to Do</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Restaurants' className={({isActive}) => `${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Restaurants</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Flights' className={({isActive}) =>  `${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Flights</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Vacation' className={({isActive}) =>`${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Vacation Rentals</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Cruises' className={({isActive}) => `${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Cruises</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Rental' className={({isActive}) => `${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Rental Cars</NavLink></li>
                   <li><NavLink id='appendSearchUl' to='/Forums' className={({isActive}) => `${isActive ? 'isActive' : "NotActive"} mx-3`
                                    }>Forums</NavLink></li>
               </ul>
          </div>
         )
       }
       </div>
    </ThemeProvider>
  )
}

export default Navbar
