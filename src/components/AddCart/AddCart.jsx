import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useAddCart } from '../../useContext/AddCart'
import { RxCrossCircled } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";

function AddCart() {
   const {addData,setAddData} = useAddCart()

   const remove = (id) =>{
     setAddData((prev) => prev.filter((data) => data.id !== id))
   }

  return (
    <div>
       <div className="offcanvas  offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header border-bottom">
              <p className="offcanvas-title text-center w-100 mb-0 d-flex align-items-center justify-content-center fw-semibold" id="offcanvasExampleLabel"><HiOutlineShoppingBag/><span className='ms-2'> My Trip</span></p>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body p-4">
          <h4 className='fw-bold'>Save to a Trip</h4>
          {
            addData.length > 0  ? '' :  'Not added any trip yet'
          }
            <div className='mt-4'>
                {
                  addData?.map((item) =>(
                        <div key={item.id} className='d-flex p-3 border mt-3 rounded-2'>
                          <img src={item.wayImg} width={'80px'}  className='rounded-1'/>
                           <div>
                              <p className='ms-3 mb-1 fw-semibold'><small>{item.heading}</small></p>
                              <p className='ms-3' style={{fontSize:'12px'}}><IoLocationOutline/> New Delhi</p>
                           </div>   
                            <span onClick={() => remove(item.id)} className='fs-6 text-danger p-0 m-0 border-0 d-flex align-items-top '><RxCrossCircled/></span>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddCart
