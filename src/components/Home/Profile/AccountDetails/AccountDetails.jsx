import React from 'react'
import { GrContactInfo } from "react-icons/gr";
import { SiSimplelogin } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineCardTravel } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { GoCreditCard } from "react-icons/go";
import { NavLink } from 'react-router-dom';


function AccountDetails() {
  return (
    <div className='mt-5'>
         <div className=''>
             <h1 className='fw-bold' >Account</h1>
             <h5>Sam Ali</h5>
         </div>
         <div className="d-flex flex-wrap gap-4 mt-5">
             <NavLink to='info' className='text-decoration-none text-black'>
                <div style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><GrContactInfo/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Personal info</h6>
                      <p className='mb-0'><small>Provide personal details and how we can reach you</small></p>
                 </div>
                </div>
                </div>
             </NavLink>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><SiSimplelogin/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Login & security</h6>
                      <p className='mb-0'><small>Update your password and secure your account</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><MdOutlinePayments/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Payments & payouts</h6>
                      <p className='mb-0'><small>Review payments, payouts, coupons and gift cards</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><CiStickyNote/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Taxes</h6>
                      <p className='mb-0'><small>Manage taxpayer information and tax documents</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><IoIosNotificationsOutline/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Notifications</h6>
                      <p className='mb-0'><small>Choose notification preferences and how you want to be contacted</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><MdOutlinePrivacyTip/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Privacy & sharing</h6>
                      <p className='mb-0'><small>Manage your personal data, connected services and data sharing settings</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><AiOutlineGlobal/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Global preferences</h6>
                      <p className='mb-0'><small>Set your default language, currency, and timezone</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><MdOutlineCardTravel/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Travel for work</h6>
                      <p className='mb-0'><small>Add a work email for business trip benefits</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><RiToolsLine/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Professional hosting tools</h6>
                      <p className='mb-0'><small>Get professional tools if you manage several properties on Airbnb</small></p>
                 </div>
                </div>
             </div>
             <div  style={{width:'19rem'}}>
                <div className='shadow p-3 rounded-2'>
                <span className='fs-4'><GoCreditCard/></span>
                 <div className='mt-3'>
                      <h6 className='fw-bold mb-1'>Referral credit & coupons</h6>
                      <p className='mb-0'><small>Your referral credits and coupon balance is ₹0. Learn more.</small></p>
                 </div>
                </div>
             </div>
         </div>
    </div>
  )
}

export default AccountDetails
