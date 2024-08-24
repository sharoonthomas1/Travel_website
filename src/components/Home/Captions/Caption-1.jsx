import React from 'react'

function Caption01() {
  return (
    <div>
      <div className="caption my-5 row p-3 rounded-2" style={{backgroundColor:'#f2ecf9'}}>
             <div className="col-12 col-md-3">
                <img src="/public/images/caption.jpg" alt="caption"  className='rounded-2  w-75 img-fluid'/>
             </div>
              <div className='col-12 col-md-6'>
                  <div className='m-4 ms-0 '>
                     <small className='bg-dark text-white p-1 px-2 rounded-1'>Sponsored by Go Türkiye</small>
                     <h5 className='mt-3'>Follow your taste buds through Türkiye’s award-winning gastro cities</h5>
                     <p><small>Elevate your culinary adventure with Michelin Guide dining in İstanbul, İzmir and Bodrum</small></p>
                  </div>
              </div>
             <div className="col-12 col-md-3">
             <div className='m-4 ms-0 d-flex justify-content-end'>
                 <button className='btn btn-outline-dark px-4 py-2 rounded-5 ms-auto'>Read now</button>
             </div>
             </div>
        </div>
    </div>
  )
}

export default Caption01
