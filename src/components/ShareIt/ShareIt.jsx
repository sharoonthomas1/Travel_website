import React from 'react'
import { useShareIt } from '../../useContext/ShareIte';
import { IoCopyOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";

function ShareIt() {

  const {handlerShareIt} = useShareIt()

  const buttons01 = [
    {linkName:'Copy Link', linkIcon:<IoCopyOutline/>},
    {linkName:'Messages', linkIcon:<LuMessageSquare/>},
    {linkName:'Messenger', linkIcon:<BiMessageRounded/>},
    {linkName:'Twitter', linkIcon:<RiTwitterXLine/>},

  ]

  const button02 = [
    {link:'https://web.whatsapp.com/',linkName:'Email',linkIcon:<MdOutlineMail/>},
    {link:'',linkName:'WhatsApp',linkIcon:<MdWhatsapp/>},
    {link:'',linkName:'Facebook',linkIcon:<FaFacebookF/>},
    {link:'',linkName:'More options',linkIcon:<IoIosMore/>},
  ]

  return (
    <div className="modal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content border-0 p-3 shadow">
        <div className="modal-header">
          <h5 className="modal-title">Share this experience</h5>
          <button type="button" class="btn-close" onClick={handlerShareIt} ></button>
        </div>
        <div className="modal-body">
           <div className='d-flex align-items-center'>
              <img src="/images/share.jpg" alt="" width={'100px'} className='rounded-2 me-3' />
              <p className='m-0'>Make core memories with Inside Out 2</p>
           </div>
        </div>
            <div className="row row-cols-lg-2 p-3">
               <div className="col">
                   <div className="d-grid">
                       {
                        buttons01.map((item) =>(
                          <button className='btn btn-outline-dark m-2'>
                               <span>{item.linkName}</span>
                          </button>
                        ))
                       }
                   </div>
               </div>
               <div className="col">
                   <div className="d-grid">
                       {
                        button02.map((item) =>(
                          <button className='btn btn-outline-dark m-2'>
                               <span>{item.linkName}</span>
                          </button>
                        ))
                       }
                   </div>
               </div>
            </div>
      </div>
    </div>
  </div>
  )
}

export default ShareIt
 