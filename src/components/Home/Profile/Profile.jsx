import React from 'react'
import { useSign } from '../../../useContext/useContext'
import { NavLink } from 'react-router-dom'

function Profile() {
   const {setLongIn} = useSign()
  return (
       <div className="dropdown ">
           <button className="dropdown-toggle border-0 bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
               <img src='/images/profile.jpg' width={'44px'} className='rounded-circle border border-1 border-black ' />
           </button>
           <ul className="dropdown-menu  p-2">
             <li><NavLink className="dropdown-item py-2" to=''>Trips</NavLink></li>
             <li><NavLink className="dropdown-item py-2" to=''>Write a review</NavLink></li>
             <li><NavLink className="dropdown-item py-2" to='/profle'>Profile</NavLink></li>
             <li><NavLink className="dropdown-item py-2" to=''>Bookings</NavLink></li>
             <li><NavLink className="dropdown-item py-2" to=''>Notifications</NavLink></li>
             <li><NavLink className="dropdown-item py-2" to='/account'>Account info</NavLink></li>
             <li><NavLink className="dropdown-item py-2" to=''  onClick={() => setLongIn(false)}>Sign out</NavLink></li>
           </ul>
         </div>
  )
}

export default Profile
