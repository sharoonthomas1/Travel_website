import React from 'react'

function Caption02() {
  return (
    <div className='row p-3 rounded-2' style={{backgroundColor:'#f2ecf9'}}>
     <div className="col-12 col-lg-6">
        <img src="images/caption-2.jpg" alt=""  className='img-fluid rounded-2'/>
     </div>
     <div className="col-12 d-flex align-items-center col-lg-6">
         <div className='m-lg-5   m-3 ms-0'>
             <h2 className='fw-bold'>It’s easier than ever to go together</h2>
            <p>Travel is better when you can share it with your best friend. Find all the tips, guides, and tools you need to take a dream trip with your dog.    </p>
            <button className='btn btn-dark px-4 py-2 rounded-5'>Explore more</button>
         </div>
     </div>
    </div>
  )
}

export default Caption02
