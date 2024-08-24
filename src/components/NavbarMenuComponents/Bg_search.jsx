import React from 'react'
import Green from '../../Buttons/Green'

function Bg_search({img}) {
  return (
    <div id='Be_search' style={{backgroundImage:`url(${img})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',borderRadius:'6px'}} className='d-flex justify-content-center align-items-center'>
          <div className='mt-4 mx-auto d-flex' style={{width:'70%'}}>
               <input type="search" className='form-control py-3 px-4 rounded-5 me-2' style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} placeholder='Hotel name or destination' />
               <Green props='Seacrh'/>
           </div>
    </div>
  )
}

export default Bg_search

